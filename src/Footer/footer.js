import './footer.css'

const Footer = () => {
    return <div className="footer">
            <p className="follow-title">Suivez la Wild Code School</p>
            <div className="follow-icone">
                <a target="blanck" href="https://www.facebook.com/WildCodeSchool/"> <i className="ico-follow fab fa-facebook-f"></i></a>
                <a target="blanck" href="https://www.instagram.com/wildcodeschoolofficial/"> <i className="ico-follow fab fa-instagram"></i></a>
                <a target="blanck" href="https://twitter.com/WildSchoolReims"> <i className="ico-follow fab fa-twitter"></i> </a>
                <a target="blanck" href="https://www.linkedin.com/school/wild-codes-chool/"> <i className="ico-follow fab fa-linkedin-in"></i></a>
            </div>
            <a target="blanck" className="logo-wcs" href="https://www.wildcodeschool.com/fr-FR"><img alt="logo wild code school" src="img/footer/wcs-logo.png"></img></a>
    </div>
}

export default Footer