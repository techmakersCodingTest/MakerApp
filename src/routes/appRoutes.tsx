import { RouteType } from "./config";
import HomePage from "../pages/virtual-assistant/VirtualAssistantPage";
import ModernSlaveryPageLayout from "../pages/modern-slavery/ModernSlaveryPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ModernSlaveryIndex from "../pages/modern-slavery/ModernSlaveryIndex";
import ProfilePage from "../pages/profile/ProfilePage";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BenchmarkingToolPage from "../pages/modern-slavery/BenchmarkingToolPage";
import PerformanceResultsPage from "../pages/modern-slavery/PerformanceResultsPage";
import VirtualAssistantPage from "../pages/virtual-assistant/VirtualAssistantPage";
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import UploadDocumentsPage from "../pages/modern-slavery/UploadDocumentsPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/profile",
        element: <ProfilePage />,
        state: "profile",
        sidebarProps: {
            displayText: "Perfil",
            icon: <AccountBoxIcon />
        }
    },
    {
        path: "/modern-slavery",
        element: <ModernSlaveryPageLayout />,
        state: "modern-slavery",
        sidebarProps: {
            displayText: "Modern Slavery",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <ModernSlaveryIndex />,
                state: "benchmarking-tool.index"
            },
            {
                path: "/modern-slavery/benchmarking-tool",
                element: <BenchmarkingToolPage />,
                state: "modern-slavery.benchmarking-tool",
                sidebarProps: {
                    displayText: "Benchmarking Tool"
                }
            },
            {
                path: "/modern-slavery/performance-results",
                element: <PerformanceResultsPage />,
                state: "modern-slavery.performance-results",
                sidebarProps: {
                    displayText: "Resultados de Desempeño"
                }
            },
            {
                path: "/modern-slavery/upload-documents",
                element: <UploadDocumentsPage />,
                state: "modern-slavery.upload-documents",
                sidebarProps: {
                    displayText: "Subir Documentos"
                }
            }
        ]
    },
    {
        path: "/virtual-assistant",
        element: <VirtualAssistantPage />,
        state: "virtual-assistant",
        sidebarProps: {
            displayText: "Asistente Virtual",
            icon: <SmartToySharpIcon />
        }
    }
]

export default appRoutes