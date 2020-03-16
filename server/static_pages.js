const fs = require('fs');

function getFileContent(filePath, res) {
    fs.readFile(
        filePath,
        (err, fileContent) => {
          if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Not found' }));
          }
          return res.end(fileContent);
        }
    );
}

module.exports = {
    getFileContent
}