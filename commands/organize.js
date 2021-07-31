let fs = require("fs");
let path = require("path");
const { fileURLToPath } = require("url");

types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['jpg', 'png', 'svg', "jpeg"]
}



function organizeFn(src) {
    if (src == undefined) src = process.cwd();

    // arr[all files before transfer]
    let assets = fs.readdirSync(src);

    // Make new directory
    let organizedFilePath = path.join(src, "organized");
    if (!fs.existsSync(organizedFilePath)) {
        fs.mkdirSync(organizedFilePath);
    }

    // copy w.r.t extension
    for (let ele = 0; ele < assets.length; ele++) {
        let fullPath = path.join(src, assets[ele]);

        // check if it's a file or directory
        if (fs.lstatSync(fullPath).isFile()) {
            let folderName = checkExtreturnFolder(assets[ele]); // folderName according to types obj
            console.log(folderName);
            copyFileTodest(folderName, fullPath, src);
            fs.unlinkSync(fullPath)
        }
    }

}

function copyFileTodest(folderName, fullPath, src) {
    let destDirPath = path.join(src, "organized", folderName);

    if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath);
    }

    let orginalFileName = path.basename(fullPath);
    let destFilePath = path.join(destDirPath, orginalFileName);
    fs.copyFileSync(fullPath, destFilePath);
    console.log(orginalFileName, "is copied to", folderName);
}

function checkExtreturnFolder(FileName) {
    let assetExt = path.extname(FileName);
    assetExt = assetExt.slice(1);
    for (let key in types) {
        for (let iarr = 0; iarr < key.length; iarr++) {
            if (assetExt === types[key][iarr]) return key;
        }
    }
    return "others";
}

module.exports = {
    organizefxn: organizeFn
}