export default function FooterSection() {
    return (
        <div className="footer-section flex">
        <div className="wrap flex">
            <h1>subscribe to our email list</h1>
            <form className="flex" action="">
            <input type="text" id="email" placeholder="What is your email?" />
            <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
}
  