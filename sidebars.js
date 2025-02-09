/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  v3SideBar: [
      'v3/intro',
      'v3/server-time',
      'v3/smp',
    {
      type: 'category',
      label: 'Derivatives',
      link: {
        type: 'generated-index',
        title: 'Derivatives Guides',
        description:
            "Let's learn about derivatives concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
            {
              type: 'category',
              label: 'Market data',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Unified Margin',
              items: [
                {
                  type: 'category',
                  label: 'Order',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-unified/order'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Position',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-unified/position'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Account',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-unified/account'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Contract',
              items: [
                {
                  type: 'category',
                  label: 'Order',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-contract/order'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Position',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-contract/position'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Account',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/derivatives/rest-contract/account'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
              'v3/derivatives/wss-authentication',
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel (UM)',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-unified'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel (contract)',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/derivatives/wss-contract'
                }
              ]
            }
          ]
        },
          'v3/derivatives/rate-limit',
          'v3/derivatives/enum',
          'v3/derivatives/error',
      ],
    },
    {
      type: 'category',
      label: 'Spot',
      link: {
        type: 'generated-index',
        title: 'Spot Guides',
        description:
            "Let's learn about spot concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
            {
              type: 'category',
              label: 'Market data',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Trade',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-spot'
                }
              ]
            },
              'v3/spot/wallet',
            {
              type: 'category',
              label: 'Leveraged Token',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-etp'
                }
              ]
            },
            {
              type: 'category',
              label: 'Cross Margin Trade',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-spot-margin'
                }
              ]
            },
            {
              type: 'category',
              label: 'Institution Loan',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/rest-institution-loan'
                }
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
            'v3/spot/wss-authentication',
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/spot/wss-private'
                }
              ]
            }
          ]
        },
        'v3/spot/rate-limit',
        'v3/spot/enum',
        'v3/spot/error',
      ]
    },
    {
      type: 'category',
      label: 'Copy Trade',
      link: {
        type: 'generated-index',
        title: 'Copy Trade Guides',
        description:
            "Let's learn about copy trade concepts!",
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
            {
              type: 'category',
              label: 'Market data',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/rest-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Trade',
              items: [
                {
                  type: 'category',
                  label: 'Order',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/copy-trade/rest-trade/order'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Position',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/copy-trade/rest-trade/position'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Account',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'v3/copy-trade/rest-trade/account'
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'WebSocket Stream',
          items: [
              'v3/copy-trade/wss-authentication',
            {
              type: 'category',
              label: 'Public Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/wss-public'
                }
              ]
            },
            {
              type: 'category',
              label: 'Private Channel',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'v3/copy-trade/wss-private'
                }
              ]
            }
          ]
        },
        'v3/copy-trade/rate-limit',
        'v3/copy-trade/enum',
        'v3/copy-trade/error',
      ]
    },
    {
      type: 'category',
      label: 'Account Asset',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Transfer Endpoint',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'v3/account-asset/transfer'
            }
          ]
        },
        {
          type: 'category',
          label: 'Withdraw and Deposit endpoint',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'v3/account-asset/withdraw-deposit'
            }
          ]
        },
        {
          type: 'category',
          label: 'Master-Sub User Endpoint',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'v3/account-asset/user'
            }
          ]
        },
        'v3/account-asset/rate-limit',
        'v3/account-asset/enum',
        'v3/account-asset/error',
      ]
    },
    {
      type: 'category',
      label: 'Tax',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v3/tax'
        }
      ]
    }
  ],
  v5SideBar: [
      'v5/intro',
      'v5/upgrade-guide',
      'v5/announcement',
      'v5/smp',
    {
      type: 'category',
      label: 'Market',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/market'
        }
      ]
    },
    {
      type: 'category',
      label: 'Trade',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/order'
        }
      ]
    },
    {
      type: 'category',
      label: 'Position',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/position'
        }
      ]
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/account'
        }
      ]
    },
    {
      type: 'category',
      label: 'Asset',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/asset'
        }
      ]
    },
    {
      type: 'category',
      label: 'User',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/user'
        }
      ]
    },
    {
      type: 'category',
      label: 'Spot Leverage Token',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/lt'
        }
      ]
    },
    {
      type: 'category',
      label: 'Spot Margin Trade (UTA)',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/spot-margin-uta'
        }
      ]
    },
    {
      type: 'category',
      label: 'Spot Margin Trade (Normal)',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/spot-margin-normal'
        }
      ]
    },
    {
      type: 'category',
      label: 'Institutional Lending',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/otc'
        }
      ]
    },
    {
      type: 'category',
      label: 'C2C Lending',
      items: [
        {
          type: 'autogenerated',
          dirName: 'v5/c2c-lend'
        }
      ]
    },
    {
      type: 'category',
      label: 'WebSocket Stream',
      items: [
          'v5/websocket/wss-authentication',
        {
          type: 'category',
          label: 'Public',
          items: [
            {
              type: 'autogenerated',
              dirName: 'v5/websocket/public'
            }
          ]
        },
        {
          type: 'category',
          label: 'Private',
          items: [
            {
              type: 'autogenerated',
              dirName: 'v5/websocket/private'
            }
          ]
        }
      ]
    },
    'v5/rate-limit',
    'v5/enum',
    'v5/error',
  ],
  apiExplorerSideBar: [
    {
      type: "category",
      label: "V5",
      link: {
        type: "generated-index",
        title: "V5 API",
        slug: "/api-explorer/v5/category/"
      },
      // @ts-ignore
      items: [
        require("./docs/api-explorer/v5/market/sidebar.js"),
        require("./docs/api-explorer/v5/trade/sidebar.js"),
        require("./docs/api-explorer/v5/position/sidebar.js"),
        require("./docs/api-explorer/v5/account/sidebar.js"),
        require("./docs/api-explorer/v5/asset/sidebar.js"),
        require("./docs/api-explorer/v5/user/sidebar.js"),
        require("./docs/api-explorer/v5/lt/sidebar.js"),
        require("./docs/api-explorer/v5/spot-margin-uta/sidebar.js"),
        require("./docs/api-explorer/v5/spot-margin-normal/sidebar.js"),
      ]
    },
    {
      type: "category",
      label: "V3",
      items: [
        {
          type: "category",
          label: "Derivatives",
          link: {
            type: "generated-index",
            title: "Derivatives API",
            slug: "/api-explorer/derivatives/category/"
          },
          // @ts-ignore
          items: [
            require("./docs/api-explorer/derivatives/market/sidebar.js"),
            require("./docs/api-explorer/derivatives/trade/unified/sidebar.js"),
            require("./docs/api-explorer/derivatives/trade/contract/sidebar.js"),
          ]
        },
        {
          type: "category",
          label: "Spot",
          link: {
            type: "generated-index",
            title: "Spot API",
            slug: "/api-explorer/spot/category/"
          },
          // @ts-ignore
          items: [
            require("./docs/api-explorer/spot/market/sidebar.js"),
            require("./docs/api-explorer/spot/trade/sidebar.js"),
            require("./docs/api-explorer/spot/lttrade/sidebar.js"),
            require("./docs/api-explorer/spot/crossmargin/sidebar.js"),
            // require("./docs/api-explorer/spot/institution/sidebar.js"),
          ]
        },
      ]
    },
  ],
  changelogSidebar: [
    "changelog/v5",
    "changelog/derivatives-v3",
    "changelog/spot-v3",
    "changelog/asset-v3",
    "changelog/copytrade",
  ]
};

module.exports = sidebars;
