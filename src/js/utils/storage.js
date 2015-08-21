class MediaStorage {
    request() {
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

        return new Promise(function(resolve) {
            var onInitFs = function(fs) {
                resolve(fs);
            };

            var errorHandler = function(error) {
                console.log(error);
            };

            let requestedBytes = 1024 * 1024 * 10;
            navigator.webkitPersistentStorage
                .requestQuota(requestedBytes, function(grantedBytes) {
                    window.requestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, errorHandler);
                }, errorHandler);
        });
    }

    read(fs) {
        var reader = fs.root.createReader();

        return new Promise(function(resolve) {
            reader.readEntries(function(results) {
                resolve(results);
            });
        });
    }

    write(fs, files) {
        for(var file of files) {
            (function(f) {
                fs.root.getFile(f.name, { create: true, exclusive: true }, function(entry) {
                   entry.createWriter(function(writer) {
                        writer.write(f);
                    });
                });
            })(file);
        }
    }
}

var mediaStorage = new MediaStorage();
export default mediaStorage;
