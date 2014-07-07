exports.listen = function (server) {
    server.get('/rest/v1/executions/:id/summary', function (req, res) {
        res.sendfile('./mock-server/execution.json');
    });

    server.post('/rest/v1/executions', function (req, res) {
        res.sendfile('./mock-server/trigger.json');
    });

    server.get('/rest/v1/flows/:id/inputs', function (req, res) {
        res.sendfile('./mock-server/inputs.json');
    });

    server.get('/rest/v1/flows/library', function (req, res) {
        res.sendfile('./mock-server/flows.json');
    });

    server.get('/rest/v1/flows/:id', function (req, res) {
        res.sendfile('./mock-server/flow.json');
    });
};