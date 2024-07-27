import { PropsWithChildren } from "react";
import {
    Authenticator as AmplifyAuthenticator,
    ThemeProvider as AmplifyThemeProvider,
    Theme
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

const Authenticator: React.FC<PropsWithChildren> = ({ children }) => {
    const theme: Theme = {
        name: "liberta-track"
    };
    return (
        <AmplifyThemeProvider theme={theme}>
            <AmplifyAuthenticator
                variation="modal"
                signUpAttributes={["given_name", "family_name"]}
                formFields={{
                    signIn: {
                        username: {
                            label: "Email",
                            placeholder: "Ingresa tu email",
                        },
                        password: {
                            label: "Contraseña",
                            placeholder: "Ingresa tu contraseña",
                        },
                    },
                    signUp: {
                        username: {
                            label: "Email",
                            placeholder: "Ingresa tu email"
                        },
                        password: {
                            label: "Contraseña",
                            placeholder: "Ingresa tu contraseña",
                        },
                        confirm_password: {
                            label: "Confirmar Contraseña",
                            placeholder: "Confirma tu contraseña",
                        },
                        given_name: {
                            label: "Nombre",
                            placeholder: "Ingresa tu nombre",
                        },
                        family_name: {
                            label: "Apellido",
                            placeholder: "Ingresa tu apellido"
                        }
                    }
                }}>
                {children}
            </AmplifyAuthenticator>
        </AmplifyThemeProvider>
    );
};

export default Authenticator;