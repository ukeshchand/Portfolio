import { Card, Typography } from "antd";
import React from "react";

const Projects = () => {
  return (
    <div className="appProject">
      <div className="typoContainer" style={{ width: "50%", margin: "50px" }}>
        <Typography.Text>My Work</Typography.Text>
        <Typography.Title style={{ marginTop: "20px" }}>
          Projects
        </Typography.Title>
        <Typography.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          ipsam eveniet modi repellat corporis repudiandae sint sit sapiente
          omnis nesciunt aut quaerat quia voluptates. Consequatur dicta
          assumenda aut, quaerat, architecto placeat tempora repudiandae a
          minima nam, animi veniam fugiat nesciunt nobis. Voluptates laboriosam
          voluptatibus, necessitatibus tempora sed eligendi quos deleniti.
        </Typography.Text>
      </div>
      <div
        className="kardContainer"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Card
          title="E-BAZAR"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center"
          }}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            maiores fuga quos assumenda aut est consectetur autem, ea
            reprehenderit quaerat laboriosam laborum aperiam porro corrupti
            dignissimos saepe optio adipisci reiciendis quod repellendus minima!
            Consequatur minus, exercitationem placeat debitis dicta voluptatibus
            beatae temporibus distinctio quo magnam aperiam ea tempora facere
            ratione?
          </p>
        </Card>
        <Card
          title="TIC-TAC-TOE"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            dolorem necessitatibus esse veritatis neque voluptatibus et quisquam
            blanditiis nemo! Saepe quasi accusantium eaque iste illum ratione,
            veniam facere libero? Temporibus at veniam dolorem corporis
            suscipit, similique tempore iure dolorum rem labore? Nemo quis
            dignissimos voluptatum amet maxime impedit laudantium id.
          </p>
        </Card>
        <Card
          title="BG-Changer"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center"
          }}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            enim illo reprehenderit, labore, nesciunt commodi provident non
            repellat, officiis ab delectus repellendus qui quis sunt quisquam
            aliquid. Architecto assumenda quas dicta similique quisquam
            voluptates cum. Soluta corrupti esse, nam fugit commodi, blanditiis
            aspernatur quos ea impedit vero ad deleniti. Quod.
          </p>
        </Card>
        <Card
          title="TO-DO App"
          style={{
            backgroundColor: "#D3DDCE",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "20px",
            textAlign: "center"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta,
            maxime cupiditate veniam sequi magnam quibusdam sed rerum iusto quo
            dolorem distinctio animi doloribus molestias sit officiis eum nam
            esse nisi! Minima numquam aliquid voluptas cumque optio rem, a autem
            consequuntur reprehenderit ullam labore eos! Nemo dicta rerum
            quibusdam laboriosam.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
