import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="headline">
          We believe in non-harmful and responsible <span style={{ color: "#FF8D28" }}>media</span>{" "}
          for everyone
        </h1>
        <Link href="/" className="hero-cta">
          Submit a story
        </Link>
      </div>
      <div className="stories">
        <div className="story">
          <h1>ACME developed a way to save the flowers in west ontario</h1>
          <img src="/story.png" />
        </div>
        <div className="story">
          <h1>ACME developed a way to save the flowers in west ontario</h1>
          <img src="/story.png" />
        </div>
        <div className="story">
          <h1>ACME developed a way to save the flowers in west ontario</h1>
          <img src="/story.png" />
        </div>
      </div>
    </>
  );
}
