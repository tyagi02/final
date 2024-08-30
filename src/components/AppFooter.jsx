export default function AppFooter(){
    const twitterUrl = 'https://twitter.com/moquayson';
    const whastsAppUrl = 'https://twitter.com/moquayson';
    const gitHubUrl = 'https://github.com/moquayson';
    const linkedInUrl = 'https://linkedin.com/in/moquayson';


    return(
        <footer className="border-top footer  text-muted">
            <div className="container">
                <div className="d-flex justify-content-between">
                    &copy; 2024 - College Finder
                    <div className="fw-bold">
                    Developers
                    </div>
                    <div className="socials fs-4">
                        <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/tyagi02" ><i className="bi bi-github"></i></a>
                        <a className="text-primary" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lakshit-tyagi-140941279/"><i className="bi bi-linkedin"></i></a>
                        <a className="text-success" rel="noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/#inbox"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}