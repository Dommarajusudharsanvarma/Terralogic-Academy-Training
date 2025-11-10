"use client";


import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Favorite, Home } from "@mui/icons-material";

export default function HomePage() {
    return(
        <main className="container py-5">
            <h1 className="mb-4 text-center">
                <Home fontSize="large" className="text-primary me-2" />
                Welcome to Next.js + Bootstrap + MUI!
            </h1>

            <div className="d-flex justify-content-center">
                <Card style={{ width: "20rem" }} className="shadow-sm">
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/300/200"
                      alt="sample"
                      />
                      <Card.Body>
                        <Card.Title>React-BootStrap Card</Card.Title>
                        <Card.Text>
                            This is an example of using Bootstrap and React-Bootstrap together
                            with Material UI icons in a Next.js app.
                        </Card.Text>
                        <Button variant="primary">
                            <Favorite className="me-2" />
                            Like
                        </Button>
                      </Card.Body>
                </Card>
            </div>
        </main>
    )
}