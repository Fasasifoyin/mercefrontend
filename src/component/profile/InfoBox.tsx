import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type General = {
  title: string;
  asterisk?: boolean;
};

type Linkk = General & {
  link: boolean;
  url: string;
  body?: never;
};

type NoLink = General & {
  body: string | number | number[];
  link?: never;
  url?: never;
};

type InfoBoxProps = Linkk | NoLink;

const InfoBox = ({ title, body, asterisk, link, url }: InfoBoxProps) => {
  return (
    <Box width={"100%"}>
      <h5 className="medium-text text-blue">
        {title} <span style={{ color: "red" }}>{asterisk && "*"}</span>
      </h5>
      {link ? (
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <p className="fw-bold text-hover-gold" style={{ color: "blue" }}>
            {url} <span style={{ color: "red" }}>{asterisk && "*"}</span>
          </p>
        </Link>
      ) : typeof body === "string" || typeof body === "number" ? (
        <p className="fw-bold">{body}</p>
      ) : (
        typeof body === "object" &&
        body.map((each, index) => (
          <p key={index} style={{ display: "inline" }} className="fw-bold">
            {each}
            {index !== body.length - 1 ? "," : ""}
          </p>
        ))
      )}
    </Box>
  );
};

export default InfoBox;
