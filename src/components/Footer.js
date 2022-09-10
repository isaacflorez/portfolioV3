function openLinkedIn(){
    const link = "https://www.linkedin.com/in/isaac-florez-4bb57616b/"
    window.open(link, "_blank")
}

function Footer(){
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__content">
                    <span className="logo">//Developer Isaac</span>
                    <div className="footer__contact">
                        {/* <p className="contact">Contact :</p> */}
                        {/* <i class="fa-solid fa-envelope"></i> */}
                        <p>isaacwkflorez@gmail.com</p>
                        <i class="fa-brands fa-linkedin" onClick={openLinkedIn}></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer