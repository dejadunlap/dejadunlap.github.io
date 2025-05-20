import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../styles/FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
            </h1>
            <FooterContainer>
                <Row>
                   <p> LinkedIn </p>
                   <p> Github </p>
                   <p> Email </p>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;