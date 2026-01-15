export function HeroSection(){
    return (
        <div className="mx-auto my-auto mb-5">
            <section className="text-center">
                <h1>Jaime Angeles</h1>
                <img className='ml-auto' src={undefined}></img>
                <p>Fullstack Developer focused on performance, clean UI, and maintainable code.</p>
                <div className="flex justify-center gap-5">
                    <a href="#contact-section">Contact Me</a>
                    <a href="#project-section">Projects</a>
                </div>
            </section>
        </div>
    )
}