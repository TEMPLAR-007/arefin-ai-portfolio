
const WhyChooseMe = () => {
    return (
        <section id="why-choose-me" className="py-12 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why hire me?
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        With proven experience and dedication, I deliver results.
                    </p>
                </div>

                {/* Stats - Your Style */}
                <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                    <div className="bg-card/50 border border-border p-8 rounded-lg text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="bg-card/50 border border-border p-8 rounded-lg text-center">
                        <div className="text-4xl font-bold text-accent mb-2">∞</div>
                        <div className="text-sm text-muted-foreground">Learning</div>
                    </div>
                    <div className="bg-card/50 border border-border p-8 rounded-lg text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-muted-foreground">Quality</div>
                    </div>
                </div>

                {/* Simple CTA - ZARDEX Style */}
                <div className="text-center">
                    <button
                        className="bg-muted-foreground/10 hover:bg-muted-foreground/20 text-foreground px-8 py-3 rounded-full transition-colors duration-300"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;