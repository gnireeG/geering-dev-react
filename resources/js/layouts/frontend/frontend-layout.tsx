export default function FrontendLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>Test</h1>
            <div>{ children }</div>
        </div>
        
    )
}