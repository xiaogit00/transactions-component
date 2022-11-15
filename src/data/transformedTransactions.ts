[
    {
        "date": "2022-11-01T03:45:11Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 63221,
        "gasPrice": 11147796593,
        "gasQuoteRate": 1580.8514404296875,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xe9e79e0b4a9a8bd125419da35a292c6a68818d3db55ceff4fd190946fd7208ad",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "6398390000"
            }
        ]
    },
    {
        "date": "2022-10-13T04:50:59Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x0bf90a3a04ebde5e686a2a36650407a68e818705",
        "value": "150000000000000000",
        "gasSpent": 21000,
        "gasPrice": 14635033593,
        "gasQuoteRate": 1272.7601318359375,
        "method": [],
        "txnHash": "0x35763e033c53f988b324b8c312b82d8fd183cc36e0d15b740dd0fe7ef926a7c3",
        "logEvents": []
    },
    {
        "date": "2022-10-13T04:45:11Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
        "value": "0",
        "gasSpent": 176107,
        "gasPrice": 14524076291,
        "gasQuoteRate": 1272.7601318359375,
        "method": [
            "Withdrawal",
            "Swap",
            "Transfer",
            "Transfer",
            "Approval"
        ],
        "txnHash": "0xc29ea2dea3b169c254a0fb4c840804cc47b0220b300b6747b6bcff24b503aba4",
        "logEvents": [
            {
                "name": "Withdrawal",
                "signature": "Withdrawal(indexed address src, uint256 wad)",
                "contractDecimals": 18,
                "contractName": "Wrapped Ether",
                "logo": "https://logos.covalenthq.com/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
                "ticker": "WETH",
                "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "param_src": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                "param_wad": "155632497108666352"
            },
            {
                "name": "Swap",
                "signature": "Swap(indexed address sender, indexed address recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640.png",
                "ticker": null,
                "contractAddress": "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                "param_sender": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                "param_recipient": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                "param_amount0": "200000000",
                "param_amount1": "-155632497108666352",
                "param_sqrtPriceX96": "2210666556450360055894103160420236",
                "param_liquidity": "13705246757948849095",
                "param_tick": "204739"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                "param_value": "200000000"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 18,
                "contractName": "Wrapped Ether",
                "logo": "https://logos.covalenthq.com/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
                "ticker": "WETH",
                "contractAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "param_from": "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
                "param_to": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                "param_value": "155632497108666352"
            },
            {
                "name": "Approval",
                "signature": "Approval(indexed address owner, indexed address spender, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_owner": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_spender": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                "param_value": "200000000"
            }
        ]
    },
    {
        "date": "2022-10-13T04:39:47Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 65613,
        "gasPrice": 12916040306,
        "gasQuoteRate": 1272.7601318359375,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x326e1f35a00cc7e041fca56f9024ae78ccb997bc96c5c63458b3e5adc80cea67",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0x0bf90a3a04ebde5e686a2a36650407a68e818705",
                "param_value": "1000000000"
            }
        ]
    },
    {
        "date": "2022-10-13T04:25:23Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
        "value": "0",
        "gasSpent": 137029,
        "gasPrice": 13510584527,
        "gasQuoteRate": 1272.7601318359375,
        "method": [
            "TokenExchange",
            "Transfer",
            "Transfer"
        ],
        "txnHash": "0xa23b5ccb40e4a7ae166826cb20f04b9130fb63b2b7ceaf72e1f93e57e0330d18",
        "logEvents": [
            {
                "name": "TokenExchange",
                "signature": "TokenExchange(indexed address buyer, int128 sold_id, uint256 tokens_sold, int128 bought_id, uint256 tokens_bought)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7.png",
                "ticker": null,
                "contractAddress": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_buyer": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_sold_id": "2",
                "param_tokens_sold": "5666670000",
                "param_bought_id": "1",
                "param_tokens_bought": "5665105630"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "5665105630"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_value": "5666670000"
            }
        ]
    },
    {
        "date": "2022-09-30T16:58:47Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 63221,
        "gasPrice": 20699881914,
        "gasQuoteRate": 1335.5809326171875,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xb0645e894c265aad8b181c596ce5b2462ce4f5b223538706a6194e3452e06591",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "5666670000"
            }
        ]
    },
    {
        "date": "2022-09-16T04:50:23Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 65637,
        "gasPrice": 6664612831,
        "gasQuoteRate": 1429.1607666015625,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x2670b3baeb27adb99e292a8dee1a832013d3fad58b08c0fd9b6c794d5a666b95",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0x6eb738df95d4680308a068823093b9b6997a3505",
                "param_value": "11999000000"
            }
        ]
    },
    {
        "date": "2022-09-16T04:47:35Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
        "value": "0",
        "gasSpent": 137017,
        "gasPrice": 6726110148,
        "gasQuoteRate": 1429.1607666015625,
        "method": [
            "TokenExchange",
            "Transfer",
            "Transfer"
        ],
        "txnHash": "0x9fdeb9e591fafc15897fb35c80ac8eb0313d11e19741fc530e2ce87663165f35",
        "logEvents": [
            {
                "name": "TokenExchange",
                "signature": "TokenExchange(indexed address buyer, int128 sold_id, uint256 tokens_sold, int128 bought_id, uint256 tokens_bought)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7.png",
                "ticker": null,
                "contractAddress": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_buyer": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_sold_id": "2",
                "param_tokens_sold": "8000000000",
                "param_bought_id": "1",
                "param_tokens_bought": "7999549097"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "7999549097"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_value": "8000000000"
            }
        ]
    },
    {
        "date": "2022-08-31T17:20:14Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 46097,
        "gasPrice": 19792296757,
        "gasQuoteRate": 1536.2413330078125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x4d22d757b8f7f88afaa5f3559940d954dfc9368cdca9109edf6c134e441c5557",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-07-27T17:54:28Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 63197,
        "gasPrice": 24085694443,
        "gasQuoteRate": 1518.211181640625,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x20102343035db7e9c615cb6b74e0a754b75bfb42db111f0179a904062ac483c2",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-06-30T21:21:26Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 65613,
        "gasPrice": 45938123726,
        "gasQuoteRate": 1090.82470703125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xc4a571991917bc53f005af86ab6e89d0b54aa0fe553a618a5e16774a95bc8ae0",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-06-18T05:19:26Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x72a06bf2a1ce5e39cba06c0cab824960b587d64c",
        "value": "100000000000000000",
        "gasSpent": 125915,
        "gasPrice": 18831982992,
        "gasQuoteRate": 1070.03564453125,
        "method": [],
        "txnHash": "0xfae5088c28943996d5ed6aed3cde2f87cf658f55e8042fcdc34a33e45142e44a",
        "logEvents": [
            null,
            null
        ]
    },
    {
        "date": "2022-06-16T10:48:26Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xabea9132b05a70803a4e85094fd0e1800777fbef",
        "value": "1650000000000000000",
        "gasSpent": 62621,
        "gasPrice": 21477130813,
        "gasQuoteRate": 1179.64013671875,
        "method": [],
        "txnHash": "0x57517761e7de6342cd5caa8bc70480986f57301b3775f4207019f47564486231",
        "logEvents": [
            null,
            null
        ]
    },
    {
        "date": "2022-06-16T10:45:23Z",
        "from": "0xd24400ae8bfebb18ca49be86258a3c749cf46853",
        "to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "value": "1769496000000000000",
        "gasSpent": 21000,
        "gasPrice": 30000000000,
        "gasQuoteRate": 1179.64013671875,
        "method": [],
        "txnHash": "0x28e1c8adf5ccbbd02eae61b0edb820b3db442c694fd68996a83fec57bfa53846",
        "logEvents": []
    },
    {
        "date": "2022-06-16T09:29:38Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xabea9132b05a70803a4e85094fd0e1800777fbef",
        "value": "0",
        "gasSpent": 112649,
        "gasPrice": 37983062848,
        "gasQuoteRate": 1179.64013671875,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xc602c293b6d000882992c82d09efa413f76dd5c6576e274f8107cfdcfb3cec63",
        "logEvents": [
            null,
            null,
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0xabea9132b05a70803a4e85094fd0e1800777fbef",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-06-16T09:29:21Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 59963,
        "gasPrice": 38268434820,
        "gasQuoteRate": 1179.64013671875,
        "method": [
            "Approval"
        ],
        "txnHash": "0xa96df3c1523ca651138ca97ff057b0383cd37cbb5702fbaa83a221c95d672c51",
        "logEvents": [
            {
                "name": "Approval",
                "signature": "Approval(indexed address owner, indexed address spender, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_owner": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_spender": "0xabea9132b05a70803a4e85094fd0e1800777fbef",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-05-31T18:53:41Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 65613,
        "gasPrice": 42545047252,
        "gasQuoteRate": 1938.103271484375,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x9508e372d64c9dd36befe55ba58d66bbbc67f07ceff05c55b2ad2795bbf13a7a",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-05-16T23:08:03Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 60837,
        "gasPrice": 18634600915,
        "gasQuoteRate": 2120.065673828125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x426d9297e972e7b59d4c68944b8bedbb4f1d89c71fe802b5b29286f5d9dea78a",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0x6eb738df95d4680308a068823093b9b6997a3505",
                "param_value": "16361294650"
            }
        ]
    },
    {
        "date": "2022-05-16T23:02:56Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
        "value": "0",
        "gasSpent": 139163,
        "gasPrice": 17377599516,
        "gasQuoteRate": 2120.065673828125,
        "method": [
            "TokenExchange",
            "Transfer",
            "Transfer"
        ],
        "txnHash": "0xedf433f76d44685a7ace9ba3dd75c319dc90acf512723445ccae6d8192e8da8e",
        "logEvents": [
            {
                "name": "TokenExchange",
                "signature": "TokenExchange(indexed address buyer, int128 sold_id, uint256 tokens_sold, int128 bought_id, uint256 tokens_bought)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7.png",
                "ticker": null,
                "contractAddress": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_buyer": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_sold_id": "2",
                "param_tokens_sold": "4000000000",
                "param_bought_id": "1",
                "param_tokens_bought": "3994679650"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "3994679650"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_value": "4000000000"
            }
        ]
    },

    {
        "date": "2022-05-12T01:35:31Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 48897,
        "gasPrice": 62496483737,
        "gasQuoteRate": 1952.8038330078125,
        "method": [
            "Approval"
        ],
        "txnHash": "0x5eb9cda0c86691f418e751287e9bc2f0f73bd0c14868cd291038ebbabdd6a4af",
        "logEvents": [
            {
                "name": "Approval",
                "signature": "Approval(indexed address owner, indexed address spender, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_owner": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_spender": "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
                "param_value": "115792089237316195423570985008687907853269984665640564039457584007913129639935"
            }
        ]
    },
    {
        "date": "2022-04-29T19:14:12Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0",
        "gasSpent": 63197,
        "gasPrice": 80936218406,
        "gasQuoteRate": 2897.568359375,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xb566c7a536a9313dcf9ea104185fbe62115ce3f9062695646c59b39123e0b42a",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "Tether USD",
                "logo": "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
                "ticker": "USDT",
                "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-04-01T02:06:21Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48513,
        "gasPrice": 50064158568,
        "gasQuoteRate": 3396.226318359375,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x6c41e716c46917039106ed74995662047fbeb5ad65d93f7df60bba3d118c16d3",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-03-23T21:27:08Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48525,
        "gasPrice": 42776256343,
        "gasQuoteRate": 2999.100830078125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x4b2ede520506a64971bc5d386a888334e9a60ebf54f41aba12dc375c31fde8ea",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "290000000"
            }
        ]
    },
    {
        "date": "2022-03-15T23:48:08Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xf3ba727b200ef2222e6c56e33bcca36577a67312",
        "value": "40000000000000000",
        "gasSpent": 21000,
        "gasPrice": 46186437000,
        "gasQuoteRate": 2642.154541015625,
        "method": [],
        "txnHash": "0xc68761a49507ea1bda62e613fea65387773ec33e3eef082aa29f015c810a64cb",
        "logEvents": []
    },
    {
        "date": "2022-03-01T01:36:59Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48513,
        "gasPrice": 66223584968,
        "gasQuoteRate": 2896.67822265625,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x4bb4de823a6ce6e6570ced20fed7133a2a66911fb90c84e35af3e8bc94462b38",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-02-21T14:07:48Z",
        "from": "0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48525,
        "gasPrice": 108791874722,
        "gasQuoteRate": 2676.7763671875,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xfc57214bc244a02758b963154e359c052ad87a14896e17d79e1f8df7c2f38d6a",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "138000000"
            }
        ]
    },
    {
        "date": "2022-02-10T07:44:48Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 65625,
        "gasPrice": 48061083401,
        "gasQuoteRate": 3137.3798828125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x49430e9be3315d56c58e823f6f4d61707a6fb2427c16e6bc428becd1bd9d8082",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_to": "0x6eb738df95d4680308a068823093b9b6997a3505",
                "param_value": "7000000000"
            }
        ]
    },
    {
        "date": "2022-02-01T06:12:29Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48513,
        "gasPrice": 98735675125,
        "gasQuoteRate": 2780.225830078125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x73034b02a5d8971df75a1e8b3a15b43a7f74fdff70090f021019666ebbb14bc7",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "4000000000"
            }
        ]
    },
    {
        "date": "2022-01-16T11:00:00Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
        "value": "1655826930418762",
        "gasSpent": 280308,
        "gasPrice": 81006550038,
        "gasQuoteRate": 3362.12841796875,
        "method": [
            "NameRegistered",
            "Transfer",
            "NewOwner",
            "AddrChanged",
            "AddressChanged",
            "NewResolver",
            "NameRegistered",
            "NewOwner",
            "Transfer"
        ],
        "txnHash": "0x849570123ea7bab6020920ec1612ab030bf88e17b6202d972db4e4454ce782ee",
        "logEvents": [
            {
                "name": "NameRegistered",
                "signature": "NameRegistered(string name, indexed bytes32 label, indexed address owner, uint256 cost, uint256 expires)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x283af0b28c62c092c9727f1ee09c02ca627eb7f5.png",
                "ticker": null,
                "contractAddress": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
                "param_name": "mybooboo",
                "param_label": "kjw2wG2chxfYAhMk+rR6X1J4MccExx9yVTAS4gIcnDQ=",
                "param_owner": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_cost": "1506193237775088",
                "param_expires": "1673887752"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, indexed uint256 tokenId)",
                "contractDecimals": 0,
                "contractName": "ENS: Base Registrar",
                "logo": "https://logos.covalenthq.com/tokens/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png",
                "ticker": "ENS",
                "contractAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
                "param_from": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_tokenId": "66144064599199514101561765867957737313401711468445348627922060165000288050228"
            },
            {
                "name": "NewOwner",
                "signature": "NewOwner(indexed bytes32 node, indexed bytes32 label, address owner)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e.png",
                "ticker": null,
                "contractAddress": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
                "param_node": "k83rcIt1RdxmjrkoAXYWnRwzz9jtbwRpCgvMiKk/xK4=",
                "param_label": "kjw2wG2chxfYAhMk+rR6X1J4MccExx9yVTAS4gIcnDQ=",
                "param_owner": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7"
            },
            {
                "name": "AddrChanged",
                "signature": "AddrChanged(indexed bytes32 node, address a)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41.png",
                "ticker": null,
                "contractAddress": "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41",
                "param_node": "NMiKpwttUr9Cbp83bWqx0xEjQsEmM8CALJaQtWqc8IM=",
                "param_a": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7"
            },
            {
                "name": "AddressChanged",
                "signature": "AddressChanged(indexed bytes32 node, uint256 coinType, bytes newAddress)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41.png",
                "ticker": null,
                "contractAddress": "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41",
                "param_node": "NMiKpwttUr9Cbp83bWqx0xEjQsEmM8CALJaQtWqc8IM=",
                "param_coinType": "60",
                "param_newAddress": "xtrAA6SXpvwdlIoHkTApqqc+h9c="
            },
            {
                "name": "NewResolver",
                "signature": "NewResolver(indexed bytes32 node, address resolver)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e.png",
                "ticker": null,
                "contractAddress": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
                "param_node": "NMiKpwttUr9Cbp83bWqx0xEjQsEmM8CALJaQtWqc8IM=",
                "param_resolver": "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41"
            },
            {
                "name": "NameRegistered",
                "signature": "NameRegistered(indexed uint256 id, indexed address owner, uint256 expires)",
                "contractDecimals": 0,
                "contractName": "ENS: Base Registrar",
                "logo": "https://logos.covalenthq.com/tokens/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png",
                "ticker": "ENS",
                "contractAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
                "param_id": "66144064599199514101561765867957737313401711468445348627922060165000288050228",
                "param_owner": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
                "param_expires": "1673887752"
            },
            {
                "name": "NewOwner",
                "signature": "NewOwner(indexed bytes32 node, indexed bytes32 label, address owner)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e.png",
                "ticker": null,
                "contractAddress": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
                "param_node": "k83rcIt1RdxmjrkoAXYWnRwzz9jtbwRpCgvMiKk/xK4=",
                "param_label": "kjw2wG2chxfYAhMk+rR6X1J4MccExx9yVTAS4gIcnDQ=",
                "param_owner": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5"
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, indexed uint256 tokenId)",
                "contractDecimals": 0,
                "contractName": "ENS: Base Registrar",
                "logo": "https://logos.covalenthq.com/tokens/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png",
                "ticker": "ENS",
                "contractAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
                "param_from": "0x0000000000000000000000000000000000000000",
                "param_to": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
                "param_tokenId": "66144064599199514101561765867957737313401711468445348627922060165000288050228"
            }
        ]
    },
    {
        "date": "2022-01-16T10:52:48Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
        "value": "0",
        "gasSpent": 46267,
        "gasPrice": 84485308360,
        "gasQuoteRate": 3362.12841796875,
        "method": [],
        "txnHash": "0x60b992c964a58fa7d34141d4a319272ca1c8a4bd02e0051db905aca61a728439",
        "logEvents": []
    },
    {
        "date": "2022-01-16T10:52:48Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
        "value": "3000000000000000",
        "gasSpent": 214380,
        "gasPrice": 84485308360,
        "gasQuoteRate": 3362.12841796875,
        "method": [
            "OrdersMatched",
            "Transfer",
            "Approval"
        ],
        "txnHash": "0xdd3775e7a4b5556303f941bded85637bd785457d4f9b0bf7401ac5754799ffcb",
        "logEvents": [
            {
                "name": "OrdersMatched",
                "signature": "OrdersMatched(bytes32 buyHash, bytes32 sellHash, indexed address maker, indexed address taker, uint256 price, indexed bytes32 metadata)",
                "contractDecimals": 0,
                "contractName": "Project Wyvern Exchange",
                "logo": "https://logos.covalenthq.com/tokens/1/0x7be8076f4ea4a4ad08075c2508e481d6c946d12b.png",
                "ticker": null,
                "contractAddress": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
                "param_buyHash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                "param_sellHash": "aHEbESiZ7NexMOh96csLgMIH10EBW1Bv5B4HU6BvQ0Y=",
                "param_maker": "0x3595a1508cb1180e8e7f50008db1109f5293efc5",
                "param_taker": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_price": "3000000000000000",
                "param_metadata": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, indexed uint256 tokenId)",
                "contractDecimals": 0,
                "contractName": "Cuddle Bears Daycare",
                "logo": "https://logos.covalenthq.com/tokens/1/0x90f87748c68c4b3e63256831717365b1f45f55f4.png",
                "ticker": "CBDC",
                "contractAddress": "0x90f87748c68c4b3e63256831717365b1f45f55f4",
                "param_from": "0x3595a1508cb1180e8e7f50008db1109f5293efc5",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_tokenId": "824"
            },
            {
                "name": "Approval",
                "signature": "Approval(indexed address from, indexed address to, indexed uint256 tokenId)",
                "contractDecimals": 0,
                "contractName": "Cuddle Bears Daycare",
                "logo": "https://logos.covalenthq.com/tokens/1/0x90f87748c68c4b3e63256831717365b1f45f55f4.png",
                "ticker": "CBDC",
                "contractAddress": "0x90f87748c68c4b3e63256831717365b1f45f55f4",
                "param_from": "0x3595a1508cb1180e8e7f50008db1109f5293efc5",
                "param_to": "0x0000000000000000000000000000000000000000",
                "param_tokenId": "824"
            }
        ]
    },
    {
        "date": "2022-01-07T22:08:20Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "value": "130000000000000000",
        "gasSpent": 21000,
        "gasPrice": 177852853451,
        "gasQuoteRate": 3327.057861328125,
        "method": [],
        "txnHash": "0x896468982697d6b69a51816e791e84cb49f84e2089aae6e67a0a1b228a30dd1a",
        "logEvents": []
    },
    {
        "date": "2022-01-07T20:46:24Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48513,
        "gasPrice": 123176164746,
        "gasQuoteRate": 3327.057861328125,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x010e51dc0dc53150d9d229c553015b5e423d5661264dc0b21bc42404e8e2343d",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "500000000"
            }
        ]
    },
    {
        "date": "2022-01-01T05:13:52Z",
        "from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "value": "0",
        "gasSpent": 48525,
        "gasPrice": 97200000000,
        "gasQuoteRate": 3669.43505859375,
        "method": [
            "Transfer"
        ],
        "txnHash": "0xd3781ac742ed430b09dd8487f9887100b5d7d3c6c1b1b723e5948ff5796dd795",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0xc806a5dfea52dd073e4ec20c80faf7f99cd57bcd",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "2455275000"
            }
        ]
    },
    {
        "date": "2021-12-28T10:11:24Z",
        "from": "0xd24400ae8bfebb18ca49be86258a3c749cf46853",
        "to": "0x5f65f7b609678448494de4c87521cdf6cef1e932",
        "value": "0",
        "gasSpent": 72614,
        "gasPrice": 64545495870,
        "gasQuoteRate": 4052.218994140625,
        "method": [
            "Transfer"
        ],
        "txnHash": "0x775dcaaaf0bdd14e462c9cdfbc22ea8c3442ed05299a2a1b47579167885beb9d",
        "logEvents": [
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 6,
                "contractName": "USD Coin",
                "logo": "https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
                "ticker": "USDC",
                "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "param_from": "0x5f65f7b609678448494de4c87521cdf6cef1e932",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "3983340000"
            }
        ]
    },
    {
        "date": "2021-07-26T06:48:28Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0x11111112542d85b3ef69ae05771c2dccff4faa26",
        "value": "50167659000000000",
        "gasSpent": 194725,
        "gasPrice": 29000000000,
        "gasQuoteRate": 2118.6650390625,
        "method": [
            "Swapped",
            "Swapped",
            "Transfer"
        ],
        "txnHash": "0x3a9e0de6bb34c9fcaf4a29f0c69aa078e2f7ba22c70d014d85da0b06318ef18a",
        "logEvents": [
            {
                "name": "Swapped",
                "signature": "Swapped(address sender, address srcToken, address dstToken, address dstReceiver, uint256 spentAmount, uint256 returnAmount)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x11111112542d85b3ef69ae05771c2dccff4faa26.png",
                "ticker": null,
                "contractAddress": "0x11111112542d85b3ef69ae05771c2dccff4faa26",
                "param_sender": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_srcToken": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                "param_dstToken": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "param_dstReceiver": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_spentAmount": "50167659000000000",
                "param_returnAmount": "118890072631196919922"
            },
            {
                "name": "Swapped",
                "signature": "Swapped(address inAsset, address outAsset, address recipient, uint256 inAmount, uint256 outAmount, bytes auxiliaryData)",
                "contractDecimals": null,
                "contractName": null,
                "logo": null,
                "ticker": null,
                "contractAddress": "0x2e9c6dcdca22a5952a88c4b18edb5b54c5155bc9",
                "param_inAsset": "0x0000000000000000000000000000000000000000",
                "param_outAsset": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "param_recipient": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_inAmount": "50167659000000000",
                "param_outAmount": "118890072631196919922",
                "param_auxiliaryData": "MUlOQ0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
            },
            {
                "name": "Transfer",
                "signature": "Transfer(indexed address from, indexed address to, uint256 value)",
                "contractDecimals": 18,
                "contractName": "Dai Stablecoin",
                "logo": "https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png",
                "ticker": "DAI",
                "contractAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "param_from": "0xe82906b6b1b04f631d126c974af57a3a7b6a99d9",
                "param_to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_value": "118890072631196919922"
            }
        ]
    },
    {
        "date": "2021-07-19T07:33:02Z",
        "from": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "to": "0xa0c68c638235ee32657e8f720a23cec1bfc77c77",
        "value": "262000000000000000",
        "gasSpent": 77257,
        "gasPrice": 13000000000,
        "gasQuoteRate": 1882.477294921875,
        "method": [
            "StateSynced",
            "LockedEther"
        ],
        "txnHash": "0xffc3aa84f941cfa06e9b7dd26c6586ac53c96185338655e37787357778341ea5",
        "logEvents": [
            {
                "name": "StateSynced",
                "signature": "StateSynced(indexed uint256 id, indexed address contractAddress, bytes data)",
                "contractDecimals": null,
                "contractName": null,
                "logo": null,
                "ticker": null,
                "contractAddress": "0x28e4f3a7f651294b9564800b2d01f35189a5bfbe",
                "param_id": "581663",
                "param_contractAddress": "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
                "param_data": "h6eBH0v+3qPTQa0WVoCuMGsBqurMIF0idinPFX3Z+CEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAxtrAA6SXpvwdlIoHkTApqqc+h9cAAAAAAAAAAAAAAADu7u7u7u7u7u7u7u7u7u7u7u7u7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADos+coycAAA=="
            },
            {
                "name": "LockedEther",
                "signature": "LockedEther(indexed address depositor, indexed address depositReceiver, uint256 amount)",
                "contractDecimals": 0,
                "contractName": null,
                "logo": "https://logos.covalenthq.com/tokens/1/0x8484ef722627bf18ca5ae6bcf031c23e6e922b30.png",
                "ticker": null,
                "contractAddress": "0x8484ef722627bf18ca5ae6bcf031c23e6e922b30",
                "param_depositor": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_depositReceiver": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
                "param_amount": "262000000000000000"
            }
        ]
    },
    {
        "date": "2021-07-14T02:02:56Z",
        "from": "0xd24400ae8bfebb18ca49be86258a3c749cf46853",
        "to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "value": "142016000000000000",
        "gasSpent": 21000,
        "gasPrice": 39000000000,
        "gasQuoteRate": 1986.53955078125,
        "method": [],
        "txnHash": "0x534482cd70a2b245defe68d6c4181808f49c20bc095a9d035ec7fcf5ddf95381",
        "logEvents": []
    },
    {
        "date": "2021-07-12T23:20:13Z",
        "from": "0xd24400ae8bfebb18ca49be86258a3c749cf46853",
        "to": "0xc6dac003a497a6fc1d948a07913029aaa73e87d7",
        "value": "179856000000000000",
        "gasSpent": 21000,
        "gasPrice": 23000000000,
        "gasQuoteRate": 2107.819091796875,
        "method": [],
        "txnHash": "0x15961f8bbf17729d2beafc7d1b5c9d46cab634dd69c139ab14efd2b5a8bec006",
        "logEvents": []
    }
]

export {}