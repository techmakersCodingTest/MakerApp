import { RouteType } from "./config";
import HomePage from "../pages/virtual-assistant/VirtualAssistantPage";
import ModernSlaveryPageLayout from "../pages/admin/ModernSlaveryPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ModernSlaveryIndex from "../pages/admin/ModernSlaveryIndex";
import ProfilePage from "../pages/profile/ProfilePage";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PerformanceResultsPage from "../pages/admin/PerformanceResultsPage";
import VirtualAssistantPage from "../pages/virtual-assistant/VirtualAssistantPage";
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import UploadDocumentsPage from "../pages/admin/UploadDocumentsPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/admin",
        element: <ModernSlaveryPageLayout />,
        state: "admin",
        sidebarProps: {
            displayText: "Opciones Admin",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            {
                index: true,
                element: <ModernSlaveryIndex />,
                state: "benchmarking-tool.index"
            },
            {
                path: "/admin/performance-results",
                element: <PerformanceResultsPage />,
                state: "admin.performance-results",

            },
            {
                path: "/admin/upload-documents",
                element: <UploadDocumentsPage />,
                state: "admin.upload-documents",
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
        },        
    }
]

export default appRoutes