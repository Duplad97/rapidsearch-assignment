# **Rapid Search assignment**

### **Project setup**
**Requirements:** Node.js installed

Run the following commands from root directory of project:
```
npm install
npm start
```

The app will start on port by default `8000`

You can change it by editing the **PORT** variable in **src/server.ts**

### **Testing**
There are two endpoints for testing:
- `POST` /upload

  - Creates a file with the given file name and content.
  - Example of request body:
```json
{
    "filename": "testfile1.txt",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing"
}
```

- `GET` /get/{filename}
    - Returns the content of the file
- `GET` /list
    - Returns the list of uploaded files