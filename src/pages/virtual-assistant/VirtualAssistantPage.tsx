import ChatApp from "../../components/functional/ChatApp";

type Props = {}

const VirtualAssistantPage = (props: Props) => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <iframe
                src="http://localhost:8501/"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Modern Slavery Benchmarking Tool"
            ></iframe>
        </div>
    );
};

export default VirtualAssistantPage;