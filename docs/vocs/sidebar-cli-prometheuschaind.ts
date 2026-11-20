import { SidebarItem } from "vocs";

export const prometheuschaindCliSidebar: SidebarItem = {
    text: "prometheuschaind",
    link: "/cli/prometheuschaind",
    collapsed: false,
    items: [
        {
            text: "prometheuschaind node",
            link: "/cli/prometheuschaind/node"
        },
        {
            text: "prometheuschaind init",
            link: "/cli/prometheuschaind/init"
        },
        {
            text: "prometheuschaind init-state",
            link: "/cli/prometheuschaind/init-state"
        },
        {
            text: "prometheuschaind import",
            link: "/cli/prometheuschaind/import"
        },
        {
            text: "prometheuschaind import-era",
            link: "/cli/prometheuschaind/import-era"
        },
        {
            text: "prometheuschaind export-era",
            link: "/cli/prometheuschaind/export-era"
        },
        {
            text: "prometheuschaind dump-genesis",
            link: "/cli/prometheuschaind/dump-genesis"
        },
        {
            text: "prometheuschaind db",
            link: "/cli/prometheuschaind/db",
            collapsed: true,
            items: [
                {
                    text: "prometheuschaind db stats",
                    link: "/cli/prometheuschaind/db/stats"
                },
                {
                    text: "prometheuschaind db list",
                    link: "/cli/prometheuschaind/db/list"
                },
                {
                    text: "prometheuschaind db checksum",
                    link: "/cli/prometheuschaind/db/checksum",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db checksum mdbx",
                            link: "/cli/prometheuschaind/db/checksum/mdbx"
                        },
                        {
                            text: "prometheuschaind db checksum static-file",
                            link: "/cli/prometheuschaind/db/checksum/static-file"
                        },
                        {
                            text: "prometheuschaind db checksum rocksdb",
                            link: "/cli/prometheuschaind/db/checksum/rocksdb"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db copy",
                    link: "/cli/prometheuschaind/db/copy"
                },
                {
                    text: "prometheuschaind db diff",
                    link: "/cli/prometheuschaind/db/diff"
                },
                {
                    text: "prometheuschaind db get",
                    link: "/cli/prometheuschaind/db/get",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db get mdbx",
                            link: "/cli/prometheuschaind/db/get/mdbx"
                        },
                        {
                            text: "prometheuschaind db get static-file",
                            link: "/cli/prometheuschaind/db/get/static-file"
                        },
                        {
                            text: "prometheuschaind db get rocksdb",
                            link: "/cli/prometheuschaind/db/get/rocksdb"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db drop",
                    link: "/cli/prometheuschaind/db/drop"
                },
                {
                    text: "prometheuschaind db clear",
                    link: "/cli/prometheuschaind/db/clear",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db clear mdbx",
                            link: "/cli/prometheuschaind/db/clear/mdbx"
                        },
                        {
                            text: "prometheuschaind db clear static-file",
                            link: "/cli/prometheuschaind/db/clear/static-file"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db repair-trie",
                    link: "/cli/prometheuschaind/db/repair-trie"
                },
                {
                    text: "prometheuschaind db static-file-header",
                    link: "/cli/prometheuschaind/db/static-file-header",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db static-file-header block",
                            link: "/cli/prometheuschaind/db/static-file-header/block"
                        },
                        {
                            text: "prometheuschaind db static-file-header path",
                            link: "/cli/prometheuschaind/db/static-file-header/path"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db version",
                    link: "/cli/prometheuschaind/db/version"
                },
                {
                    text: "prometheuschaind db path",
                    link: "/cli/prometheuschaind/db/path"
                },
                {
                    text: "prometheuschaind db settings",
                    link: "/cli/prometheuschaind/db/settings",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db settings get",
                            link: "/cli/prometheuschaind/db/settings/get"
                        },
                        {
                            text: "prometheuschaind db settings set",
                            link: "/cli/prometheuschaind/db/settings/set",
                            collapsed: true,
                            items: [
                                {
                                    text: "prometheuschaind db settings set v2",
                                    link: "/cli/prometheuschaind/db/settings/set/v2"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "prometheuschaind db prune-checkpoints",
                    link: "/cli/prometheuschaind/db/prune-checkpoints",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db prune-checkpoints get",
                            link: "/cli/prometheuschaind/db/prune-checkpoints/get"
                        },
                        {
                            text: "prometheuschaind db prune-checkpoints set",
                            link: "/cli/prometheuschaind/db/prune-checkpoints/set"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db stage-checkpoints",
                    link: "/cli/prometheuschaind/db/stage-checkpoints",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind db stage-checkpoints get",
                            link: "/cli/prometheuschaind/db/stage-checkpoints/get"
                        },
                        {
                            text: "prometheuschaind db stage-checkpoints set",
                            link: "/cli/prometheuschaind/db/stage-checkpoints/set"
                        }
                    ]
                },
                {
                    text: "prometheuschaind db account-storage",
                    link: "/cli/prometheuschaind/db/account-storage"
                },
                {
                    text: "prometheuschaind db state",
                    link: "/cli/prometheuschaind/db/state"
                },
                {
                    text: "prometheuschaind db migrate-v2",
                    link: "/cli/prometheuschaind/db/migrate-v2"
                }
            ]
        },
        {
            text: "prometheuschaind download",
            link: "/cli/prometheuschaind/download"
        },
        {
            text: "prometheuschaind snapshot-manifest",
            link: "/cli/prometheuschaind/snapshot-manifest"
        },
        {
            text: "prometheuschaind stage",
            link: "/cli/prometheuschaind/stage",
            collapsed: true,
            items: [
                {
                    text: "prometheuschaind stage run",
                    link: "/cli/prometheuschaind/stage/run"
                },
                {
                    text: "prometheuschaind stage drop",
                    link: "/cli/prometheuschaind/stage/drop"
                },
                {
                    text: "prometheuschaind stage dump",
                    link: "/cli/prometheuschaind/stage/dump",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind stage dump execution",
                            link: "/cli/prometheuschaind/stage/dump/execution"
                        },
                        {
                            text: "prometheuschaind stage dump storage-hashing",
                            link: "/cli/prometheuschaind/stage/dump/storage-hashing"
                        },
                        {
                            text: "prometheuschaind stage dump account-hashing",
                            link: "/cli/prometheuschaind/stage/dump/account-hashing"
                        },
                        {
                            text: "prometheuschaind stage dump merkle",
                            link: "/cli/prometheuschaind/stage/dump/merkle"
                        }
                    ]
                },
                {
                    text: "prometheuschaind stage unwind",
                    link: "/cli/prometheuschaind/stage/unwind",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind stage unwind to-block",
                            link: "/cli/prometheuschaind/stage/unwind/to-block"
                        },
                        {
                            text: "prometheuschaind stage unwind num-blocks",
                            link: "/cli/prometheuschaind/stage/unwind/num-blocks"
                        }
                    ]
                }
            ]
        },
        {
            text: "prometheuschaind p2p",
            link: "/cli/prometheuschaind/p2p",
            collapsed: true,
            items: [
                {
                    text: "prometheuschaind p2p header",
                    link: "/cli/prometheuschaind/p2p/header"
                },
                {
                    text: "prometheuschaind p2p body",
                    link: "/cli/prometheuschaind/p2p/body"
                },
                {
                    text: "prometheuschaind p2p rlpx",
                    link: "/cli/prometheuschaind/p2p/rlpx",
                    collapsed: true,
                    items: [
                        {
                            text: "prometheuschaind p2p rlpx ping",
                            link: "/cli/prometheuschaind/p2p/rlpx/ping"
                        }
                    ]
                },
                {
                    text: "prometheuschaind p2p bootnode",
                    link: "/cli/prometheuschaind/p2p/bootnode"
                },
                {
                    text: "prometheuschaind p2p enode",
                    link: "/cli/prometheuschaind/p2p/enode"
                }
            ]
        },
        {
            text: "prometheuschaind config",
            link: "/cli/prometheuschaind/config"
        },
        {
            text: "prometheuschaind prune",
            link: "/cli/prometheuschaind/prune"
        },
        {
            text: "prometheuschaind re-execute",
            link: "/cli/prometheuschaind/re-execute"
        }
    ]
};
