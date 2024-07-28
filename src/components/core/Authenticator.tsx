import { PropsWithChildren, createContext, useContext, useEffect } from "react";
import React, { useState } from "react";
import {
  Authenticator as AmplifyAuthenticator,
  ThemeProvider as AmplifyThemeProvider,
  Theme,
  translations,
  View,
  Image,
  useTheme,
  Button,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
I18n.putVocabularies(translations);
I18n.setLanguage("en");
I18n.putVocabulariesForLanguage("es", {
  "Sign In": "Registrarse",
  "Sign Up": "Regístrate",
  "Email Address": "Correo Electrónico",
  "Enter your email": "Ingresa tu correo electrónico",
  Password: "Contraseña",
  "Enter your password": "Ingresa tu contraseña",
  "Sign in to your account": "Inicia sesión en tu cuenta",
  "Create a new account": "Crea una nueva cuenta",
  "Create account": "Crear cuenta",
  Name: "Nombre",
  Email: "Correo Electrónico",
  "Confirm Password": "Confirmar Contraseña",
  "Confirm your password": "Confirma tu Contraseña",
  "Enter your name": "Ingresa tu nombre",
  LastName: "Apellido",
  "Enter your lastname": "Ingresa tu apellido",
});

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

const Header = ({ toggleLanguage, language }) => {
  return (
    <Button onClick={toggleLanguage}>
      {language === "es" ? "Switch to English" : "Cambiar a Español"}
    </Button>
  );
};



const Authenticator: React.FC<PropsWithChildren> = ({ children }) => {
    const { tokens } = useTheme();
    const theme: Theme = {
      name: 'Auth Example Theme',
      tokens: {
        components: {
          authenticator: {
            router: {
              boxShadow: `0 0 16px ${tokens.colors.overlay['10']}`,
              borderWidth: '0',
            },
            form: {
              padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
            },
          },
          button: {
            primary: {
              backgroundColor: tokens.colors.neutral['100'],
            },
            link: {
              color: tokens.colors.blue['80'],
            },
          },
          fieldcontrol: {
            _focus: {
              boxShadow: `0 0 0 2px ${tokens.colors.blue['60']}`,
            },
          },
          tabs: {
            item: {
              color: tokens.colors.neutral['80'],
              _active: {
                borderColor: tokens.colors.neutral['100'],
                color: tokens.colors.blue['100'],
              },
            },
          },
        },
      },
    };
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    I18n.setLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const formFields = {
    signIn: {
      username: {
        label: I18n.get("Email Address"),
        placeholder: I18n.get("Enter your email"),
      },
      password: {
        label: I18n.get("Password"),
        placeholder: I18n.get("Enter your password"),
      },
    },
    signUp: {
      username: {
        label: I18n.get("Email"),
        placeholder: I18n.get("Enter your email"),
      },
      password: {
        label: I18n.get("Password"),
        placeholder: I18n.get("Enter your password"),
      },
      confirm_password: {
        label: I18n.get("Confirm Password"),
        placeholder: I18n.get("Confirm your password"),
      },
      given_name: {
        label: I18n.get("Name"),
        placeholder: I18n.get("Enter your name"),
      },
      family_name: {
        label: I18n.get("LastName"),
        placeholder: I18n.get("Enter your lastname"),
      },
    },
  };

  return (
    <AmplifyThemeProvider theme={theme}>
      <AmplifyAuthenticator
        variation="modal"
        signUpAttributes={["given_name", "family_name"]}
        formFields={formFields}
      >
        
        {children}
      </AmplifyAuthenticator>
    </AmplifyThemeProvider>
  );
};

export default Authenticator;
