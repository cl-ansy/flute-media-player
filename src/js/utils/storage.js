class MediaStorage {
    request() {
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

        return new Promise((resolve, reject) => {
            let requestedBytes = 1024 * 1024 * 10;

            navigator.webkitPersistentStorage
                .requestQuota(requestedBytes, grantedBytes => {
                    window.requestFileSystem(
                        window.PERSISTENT,
                        grantedBytes,
                        fs => resolve(fs),
                        error => reject(error));
                }, error => reject(error));
        });
    }

    read() {
        return new Promise((resolve, reject) => {
            this.request().then(fs => {
                var reader = fs.root.createReader();
                reader.readEntries(results => resolve(results), error => reject(error));
            })
        });
    }

    write(files) {
        return new Promise((resolve, reject) => {
            this.request().then(fs => {
                for(let file of files) {
                    fs.root.getFile(file.name, { create: true, exclusive: true }, entry => {
                        entry.createWriter(writer => {
                            writer.write(file);
                            resolve(file);
                        }, error => reject(error));
                    });
                }
            })
        });
    }

    remove(fileName) {
        return new Promise((resolve, reject) => {
            this.request().then(fs => {
                fs.root.getFile(fileName, { create: true, exclusive: true }, entry => {
                    entry.remove(() => resolve('File removed.'), error => reject(error));
                });
            })
        });
    }
}

var mediaStorage = new MediaStorage();
export default mediaStorage;
