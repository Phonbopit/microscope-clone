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

### 4. Collections

- Collection คือ mongoDB ที่จะ sync ข้อมูล real time ระหว่าง server กับ client.
- scope ของ `var` ใน Meteor จะ limit แค่ภายในไฟล์เดียวกัน ฉะนั้นจึงใช้ global variable เพื่อให้ `Posts` ใช้ได้ตั้ง app
- การเก็บข้อมูลมี 3 แบบ
    - browser memory : เก็บเหมือนตัวแปร js จะหายไปเมื่อปิด browser
    - browser's storage : เก็บข้อมูลลง localStorage หรือ cookie แชร์ข้อมูลระหว่าง tab ได้
    - server database : MongoDB
- รัน Shell ด้วยคำสั่ง `meteor shell`
- รัน mini mongo ผ่าน meteor ด้วย `meteor mongo`
- ปัญหา รัน `meteor mongo` ไม่ผ่าน เกิด error หา local db ไม่เจอ เพราะว่าไม่ได้ รัน meteor ก่อน (ต้องให้ app running ก่อน)
- `meteor remove autopublish` เพื่อไม่ให้สามารถ access ข้อมูลผ่าน Console ได้
- `publish()` เอาไว้กำหนดว่าจะให้ client เห็นอะไรบ้าง โดยฝั่ง client ต้อง  `subscribe()` flag เดียวกัน

### 5. Routing

- ใช้ package `iron:router` สำหรับ Routing และ URLs mapping.
- `iron:router` มี layout template คล้ายๆ Ruby on Rails นั่นก็คือ `{{> yield}}`
-  ตั้งค่า layoutTemplate ด้วย

    ```
    Router.configure({ layoutTemplate: 'layoutName' });
    ```
- ตามที่บทที่ 2 โฟลเดอร์​ `lib` จะถูกโหลดก่อนเป็นอันดับแรก ดังนั้นจึงใส่โค๊ดเกี่ยวกับ helper ไว้ที่นี่ 
- `iron:router` คอนเซปคล้ายๆกับ router ของ express.js การกำหนด route และกำหนด template ประมาณนี้

    ```
    Router.route('/', { name: 'postsList' });
    ```

### 6. Adding Users

- package ที่ใช้ใน chapter นี้คือ `ian:accounts-ui-bootstrap-3` และ `accouts-password'
- มี helper template คือ `{{> loginButtons}}` สำหรับการล็อคอิน