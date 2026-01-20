export function Footer() {
    return (
        <footer className="border-t border-border py-12 bg-muted/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Aman Sharma. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <p>Built with Next.js & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}
