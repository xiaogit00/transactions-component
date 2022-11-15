import axios, { AxiosRequestConfig, AxiosBasicCredentials, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { TransactionsProps, CovalentAPIBaseResponse, CategorizedTransaction } from '../types';
import { transform } from '../utils/transactions';
import { categorizeTransaction } from '../utils/categorize';
import 'antd/dist/antd.css';
import { Table, Tag, Popover, Descriptions } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import truncateEthAddress from 'truncate-eth-address';
import { blockExplorerURLs } from '../utils/blockExplorerURLs'



const Transactions = ( {chainId, address}: TransactionsProps): JSX.Element => {
    const [txns, setTxns] = useState<CategorizedTransaction[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const apiKey: string = process.env.REACT_APP_COVALENT_API_KEY as string; 

    const blockexplorerURL = blockExplorerURLs.filter(item => item.chainId === chainId)[0].url
    const transactionsEndpoint = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/`;
    const auth: AxiosBasicCredentials = {
        username: apiKey,
        password: ''
    }

    const options: AxiosRequestConfig = {
        url: transactionsEndpoint,
        method: "GET",
        auth: auth
    };

    useEffect(() => {
        axios(options)
            .then((res: AxiosResponse<CovalentAPIBaseResponse>) => {
                console.log(res.data.data.items)
                const transformedTransactions = transform(res.data.data.items.filter(txn => txn.log_events.length < 20)) //remove spam
                console.log(transformedTransactions)
                const categorizedTransactions = transformedTransactions.map((txn) => {
                    return categorizeTransaction(txn, address);
                })
                console.log(categorizedTransactions)
                setIsLoading(false)
                setTxns(categorizedTransactions)
            })
            .catch( (err) => console.log(err.message))
    }, [address])

    const columns: ColumnsType<CategorizedTransaction> = [
        {
            title: '', 
            dataIndex: 'flow',
            key: 'flow',
            width: '5%',
            render: (text, record) => {
                if (record.flow === 'Receive') {
                    return (<img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668492844/bottom_jl446a.png" width="60"/>)
                } else if (record.flow === 'Send') {
                    return (<img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668492844/up-arrow_jj6fhr.png" width="60"/>)
                } else if (record.flow === 'Exchange') {
                    return (<img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668492843/right-left_uom8y3.png" width="60"/>)
                } else {
                    return (<img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668492897/right-arrow_kgpry8.png" width="60"/>)
                }
            }
        },
        {
            title: '', 
            dataIndex: 'flow',
            key: 'flow',
            width: '7%',
            render: (text, record) => {
                const timeString12Hr = new Date(record.date).toLocaleTimeString('en-US',{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
                return (
                    <>
                    <p style={{fontSize:"2em", margin:"0"}}>{text}</p>
                    <div style={{fontSize:"1.5em", margin:"0"}}>{timeString12Hr}</div>
                    </>
                )
            }
        },
        {
            title: '', 
            dataIndex: 'date',
            key: 'date',
            width: '8%',
            render: (text) => {
                return(<p style={{fontSize:"1.2em", margin:"0"}}>{text.slice(0,10)}</p>)
            }
        },
        {
            title: 'Methods', 
            dataIndex: 'method',
            key: 'method',
            width: '8%',
            render: (_, record) => {
                if (record.logEvents.length > 0) {
                    
                    return (
                        <>
                      {record.logEvents.map(logEvent => {
                        if (logEvent) {
                            let color = logEvent.name.length > 5 ? 'geekblue' : 'green';
                            if (logEvent.name === 'Transfer') {
                              color = 'volcano';
                            }
                            const content = (
                                <>
                                    <Descriptions size={'small'} column={1} title={logEvent.name} bordered>
                                        {Object.entries(logEvent).map(item => {
                                            return (
                                                <Descriptions.Item key={item[0]} label={item[0]}>{item[1]}</Descriptions.Item>
                                            )
                                        })}
                                    </Descriptions>
                                </>
                            )
                            return (
                                <Popover key={logEvent.name} content={content} placement="rightBottom" trigger="click">
                                    <Tag color={color} key={logEvent.name} style={{cursor:"pointer"}}>
                                        {logEvent.name.toUpperCase()}
                                    </Tag>
                                </Popover>
                            );
                          }
                        }
                        )}
                    </>
                    )
                }
                
            }
        },
        {
            title: '', 
            dataIndex: 'from',
            key: 'from',
            width: '4%',
            render: (text, record) => {
                if (record.category === ('erc20' || 'ethTransfer') ) {
                    return(
                        <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668495917/user_1_vd4ki1.png" width="40" />)
                } else {
                    return(<img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668495918/scroll_bkmays.png" width="40" />)
                }
            }
        },
        {
            title: '', 
            dataIndex: 'to',
            key: 'to',
            width: '20%',
            render: (text, record) => {
                const transfers = record.logEvents.filter((logEvent) => {
                    if (logEvent) {
                        return logEvent.name === 'Transfer'
                    }
                })
                if (record.flow === 'Receive') {
                    return (
                        <div style={{fontSize:"1.3em"}}>
                            <div>From</div>
                            <div><a href={blockexplorerURL + 'address/' + record.from} target="_blank" rel="noopener noreferrer">{truncateEthAddress(record.from)}</a></div>
                        </div>
                    )
                } else if ( record.flow === 'Transact'){
                    return (
                        <div style={{fontSize:"1.3em"}}>
                            <div>To</div>
                            <div><a href={blockexplorerURL + 'address/' + record.to} target="_blank" rel="noopener noreferrer">{truncateEthAddress(record.to)}</a></div>
                        </div>
                    )
                } else if (record.flow === 'Send') {
                    if (transfers[0]) {
                        return (
                            <div style={{fontSize:"1.3em"}}>
                                <div>To</div>
                                <div><a href={blockexplorerURL + 'address/' + transfers[0].param_to} target="_blank" rel="noopener noreferrer">{truncateEthAddress(String(transfers[0].param_to))}</a></div>
                            </div>
                        )
                    }
                    
                } else if (record.flow === 'Exchange') {
       
                    if (transfers[0]?.logo && transfers[0].param_value && transfers[0].contractDecimals) {
                        const symbol = transfers[0].param_from === record.from ? "-" : "+"
                        return (
                            <div style={{display:"flex"}}>
                            <img src={transfers[0]?.logo} height="50"/>
                            <div style={{fontSize:"1.2em", marginLeft:"3px"}}>{symbol}{(Number(transfers[0].param_value)/(10**transfers[0].contractDecimals)).toFixed(2)}<div>USDC</div></div>
                            </div>
                        )
                    }
                    
                } 
            }
        },
        {
            title: '', 
            dataIndex: 'logEvents[0].name',
            key: 'logEvents[0].name',
            render: () => <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668500894/next_e7qvca.png" width="30"/>
        },
        {
            title: 'Token', 
            dataIndex: 'logEvents[0].name',
            key: 'logEvents',
            width: '15%',
            render: (text, record) => {
                const transfers = record.logEvents.filter((logEvent) => {
                    if (logEvent) {
                        return logEvent.name === 'Transfer'
                    }
                })
                if (record.category === 'erc20') {
                    if (record.logEvents[0]?.logo && record.logEvents[0].param_value && record.logEvents[0].contractDecimals) {
                        const symbol = record.flow === 'Receive' ? '+' : '-'
                        return (
                            <div style={{display:"flex"}}>
                                <img src={record.logEvents[0].logo} height="50"/>
                                <div style={{fontSize:"1.2em", marginLeft:"3px"}}>{symbol}{(Number(record.logEvents[0].param_value)/(10**record.logEvents[0].contractDecimals)).toFixed(2)}<div>{record.logEvents[0].ticker}</div></div>
                            </div>
                        )
                    }
                    
                } else if (record.category === 'ethTransfer') {
                    const symbol = record.flow === 'Receive' ? '+' : '-'
                    return (
                        <div style={{display:"flex"}}>
                            <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668503933/0x0000000000000000000000000000000000000000_oinhk2.png" height="50"/>
                            <div style={{fontSize:"1.2em", marginLeft:"3px"}}>{symbol}{(Number(record.value)/(10**18)).toFixed(5)}<div>ETH</div></div>
                        </div>
                    )
                } else if (record.category === 'swap') {
                    if (transfers[1]?.logo && transfers[1].param_value && transfers[1].contractDecimals) {
                        const symbol = transfers[1].param_from !== record.from ? "+" : "-"
                        return (
                            <div style={{display:"flex"}}>
                            <img src={transfers[1]?.logo} height="50"/>
                            <div style={{fontSize:"1.2em", marginLeft:"3px"}}>{symbol}{(Number(transfers[1].param_value)/(10**transfers[1].contractDecimals)).toFixed(2)}<div>{transfers[1].ticker}</div></div>
                            </div>
                        )
                    } else {
                        return <button>Examine</button>
                    }
                } else {
                    return <button>Examine</button>
                }
                    
            } 
        },
        {
            title: 'Gas Fee', 
            dataIndex: 'gasSpent',
            key: 'gasSpent',
            width:'10%',
            render: (text, record) => {
                const gasFee = record.gasSpent * record.gasPrice / (10**18)
                const gasFeeQuote = (gasFee * record.gasQuoteRate).toFixed(2)
                return (
                    <>
                        <p>{gasFee.toFixed(6)} ETH <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668511869/gas-station_ydpfe5.png" height="12" /></p>
                        <p>(${gasFeeQuote})</p>
                    </>
                )
            }
        },
        {
            title: 'Transaction', 
            dataIndex: 'txnHash',
            key: 'txnHash',
            width:'10%',
            render: (txnHash) => {
                return <a href={blockexplorerURL + 'tx/' + txnHash} target="_blank" rel="noopener noreferrer"> View Transaction</a>
            }
        },
    ]
    if (isLoading) {
        return (
            <Table loading={true} />
        )
    } else if (!isLoading && txns) {
        console.log("txnData",txns)
        return (
            <Table dataSource={txns} columns={columns} rowKey='txnHash'/>
        )
    } else {
        return <Table loading={true} />
    }
}

export default Transactions



// {record.flow === 'Receive' ? <div>From <p>{record.from}</p></div> : <div>To <p>{record.to}</p></div>}

