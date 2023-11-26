npm start -- --reset-cache
TODO:
npx react-native init <project_name> // lenh nay tao ra khac nha
// RUN CONMMAND
cd <pro folder>
npx react-native run-android

TODO:
npx create-expo-app <project_name>
// RUN COMMAND
npm start --loading--> PRESS 'a'
npm start run-android

//
useState()
handleOfClick()
- Xu li dong bo va bat dong bo
- Truyen gia tri: {}
- object: phai de trong dau ngoac nhon

//
justifyContent: 'space-between'

// horizontalLine la View
thanh phan lam thay 
hook
condition rendering: de xu li khi an vao nut like se doi mau

https://snack.expo.dev/@phelanpham/demo
useState de tao bien toan cuc

[]

// tao 1 adapter
goi no
do du lieu vo
//
noSQL

{} destructering
{}: truyền giá trị
thuộc tính, giá trị

key = {post.id}
post = {post}

tên thuộc tính
lấy từ hàm con và được đặt cùng tên với {giá trị truyền vào}

post.id
//
TODO: expogo chạy màn hình khác trong a program
file package.jcon: để đọc thêm
Vào file: "node_modules/expo/AppEntry.js" để import screen muốn run tương ứng

Tìm props của máy cài này
<TextInput
   placeholder = {}
   onChangeText = {}
/>

<Switch
   value={}
   onValueChange={}
   sytle = {}

/>

Array for handle more cases

Expo để demo thao tác đơn lẻ


Bai 3
Navigation Container: 1 cái và đặt ngoài cùng
Dùng chung thì tao Context: useState để use cho toàn bộ app
myContext = createContext()
myContext.Provider

export {contextA, contextB}
Alert
NOTICE: Navigation
Cùng stack mới navigation được, else thì hông nha
keyboardAvoidingView


https://reactnavigation.org/

chia 2 nhóm và navigation between 2 nhóm
//
Child Components:
- Header
- interactiveButtons
   + handleOnClick

Chưa tách handleOn...Button()
//
tách ra thì bên component bên kia xài gì thì import vô đó
20521209@gm.uit.edu.vn
tranngochien