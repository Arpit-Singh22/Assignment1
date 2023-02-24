const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fileContent = 'some content'
	await fs.writeFile('./fileName.txt', fileContent)
}
myFileWriter()

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile('./fileName.txt', 'utf-8')
	console.log(data);
}
myFileReader()


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data = await fs.appendFile('./fileName.txt', ' Hello World ')
}
myFileUpdater()

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink('./fileName.txt', (err)=> {
		console.log('file deleted');
	})
}
myFileDeleter()



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }