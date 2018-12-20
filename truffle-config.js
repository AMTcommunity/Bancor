module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8585,
            network_id: "*"
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 5000000
        }
    }
};
