import { Card, Image, Typography } from "antd";
import React from "react";

const About = () => {
  return (
    <div className="appAbout">
      <div className="typoContainer" style={{ width: "50%", margin: "50px" }}>
        <Typography.Text style={{ marginTop: "50px" }}>
          Introduction
        </Typography.Text>
        <Typography.Title style={{ marginTop: "20px" }}>
          Overview
        </Typography.Title>
        <Typography.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          beatae quis maiores voluptate placeat consequatur. Corrupti ipsa
          reiciendis numquam nemo laudantium ea non magnam impedit error et
          nostrum quia laborum illum beatae quos quas debitis quod odit tempora
          placeat veritatis adipisci, quam dolorum perspiciatis! Porro dolorem
          cumque modi soluta animi!
        </Typography.Text>
      </div>
      <div
        className="cardContainer"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Card
          title="Frontend Development"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/05/31/71/02/360_F_531710260_ByieqNe7Ut6QBHgIR7xgdsxH7gICrHr1.jpg"
            style={{ marginBottom: "20px"}}
          ></Image>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            nihil autem dolore? Labore at architecto accusantium neque iusto
            esse voluptatem delectus cupiditate tempora dolores nisi assumenda,
            asperiores animi est. Dolores sint amet distinctio dicta, ullam
            minus tempora voluptate vitae accusantium molestias, labore magnam
            sequi! Qui facilis est atque asperiores nostrum?
          </p>
        </Card>
        <Card
          title="Backend Development"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
            style={{ marginBottom: "20px"}}
          ></Image>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laudantium consectetur asperiores suscipit maiores velit quis quam
            sequi repellat ipsum amet porro sed nesciunt temporibus iure, aut
            eum nisi earum facere dolores blanditiis distinctio. Numquam, magnam
            minima quae cumque, nihil deleniti dolor odit fuga ab, aperiam quos
            quis? Labore, voluptates.
          </p>
        </Card>
        <Card
          title="Web Designing"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Image
            src="https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg"
            style={{ marginBottom: "20px"}}
          ></Image>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem veniam
            ratione adipisci maxime, autem consequatur facilis reprehenderit
            sit? Eligendi autem eum, eos recusandae in odit numquam tenetur
            officiis enim. Ex, debitis distinctio, cupiditate consequatur
            necessitatibus laborum numquam voluptates doloremque autem vitae
            voluptatem nam tenetur rerum dolorem maxime corporis quas molestiae?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
