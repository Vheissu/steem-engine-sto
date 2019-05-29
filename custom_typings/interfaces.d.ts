interface PeggedToken {
    name: string;
    symbol: string;
    pegged_token_symbol: string;
}

interface EnvironmentInterface {
    debug: boolean;
    testing: boolean;
    MAINTENANCE_MODE: boolean;
    CHAIN_ID: string;
    siteName: string;
    defaultLocale: string;
    RPC_URL: string;
    ACCOUNTS_API_URL: string;
    CONVERTER_API: string;
    NODE_API_URL: string;
    GRAPHQL_API: string;
    SCOT_API: string;
    STEEMP_ACCOUNT: string;
    NATIVE_TOKEN: string;
    DISABLED_TOKENS: string[];
    PEGGED_TOKEN: string;
    PEGGED_TOKENS: PeggedToken[];
}
