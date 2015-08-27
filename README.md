Microscope Clone
---

Credit : [Discover Meteor Book](http://discovermeteor.com)


## Note

### 1. Introduction


### 2. Getting Started

- ติดตั้ง meteor ด้วย `curl https://install.meteor.com | sh`
- สร้างแอพด้วย `meteor create appName`
- เพิ่มแพจเกจด้วย `meteor add packageName`
- โฟลเดอร์ `/server` รันเฉพาะฝั่งเซิฟเวอร์
- โฟลเดอร์ `/client` รันเฉพาะฝั่ง client
- โฟลเดอร์อื่นๆ รันทั้ง client และ server
- `/public` สำหรับ static files.
- ไฟล์ข้างใน `/lib` จะถูกโหลดก่อนไฟล์อื่น
- ไฟล์ `main.*` ถูกโหลดหลังสุด
- ไฟล์อื่นๆ ถูกโหลดตามชื่อไฟล์ เรียงตามตัวอักษร
- Meteor ไม่ใช่ MVC
- ในหนังสือเล่มนี้ ตัวแปรจะใช้ `camelCase` ชื่อไฟล์จะใช้ `my_file.js` และ css จะใช้ `.my-class`
- Meteor จะโหลดและ minify css ให้เราเอง
- ไฟล์ css จะเก็บไว้ที่ `/client/stylesheets` ไม่เหมือนไฟล์ assets อื่นๆ ที่จะอยู่ใน `/public`