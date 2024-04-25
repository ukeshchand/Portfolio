import React from 'react'
import { Image, Typography } from 'antd'

const Home = () => {
  return (
    <div className='appHome' style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "#D3DDCE"}}>
      <Image src='https://www.pngmart.com/files/15/Professional-Business-Man-Standing-PNG-Transparent-Image.png' 
      preview={false}
      width={200}
      style={{margin: "100px" }}
      ></Image>
      <div>
      <Typography.Title style={{marginLeft: ""}}>Lorem ipsum</Typography.Title> 
      <Typography.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque velit eveniet vel dolorem porro obcaecati est cupiditate unde dolor? </Typography.Text>
      </div>
    </div>
  )
}

export default Home
