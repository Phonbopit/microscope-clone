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

### 3. Templates

- `{{> postsList}}` ใช้สำหรับ include template ที่ชื่อ `postsList`
- Meteor จะค้นหาไฟล์ได้ทั้งแอพ ไม่ว่าจะเซฟไว้ที่ไหน ตัวอย่างเช่น template `postsList`
- Meteor ใช้ Spacebars เป็น template ซึ่งมาจาก Handlebars อีกทีนึง
- `{{title}}` เรียกว่า expressions
- `{{#each}} .. {{/each}}` เรียกว่า block helpers
- ใช้การตั้งชื่อไฟล์เหมือนกับ template เป็น helper แต่เปลี่ยน extensions เป็น `.js` เพื่อเอาไว้เขียน logic (ไม่มี Controller)
- `Template.postsList.helpers()` เป็น template helper ซึ่ง return ค่า `posts` จาก array ที่สร้างไว้