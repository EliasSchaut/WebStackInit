/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "auth": {
        "exception": {
            "forbidden_not_verified": string;
            "forbidden_login": string;
            "forbidden_invalid_registration": string;
            "invalid_password": string;
            "conflict_username_exists": string;
            "internal_server_error_register": string;
            "not_found_challenge": string;
            "not_found_password_reset": string;
        };
        "success": {
            "register": string;
            "verified": string;
            "password_reset_request": string;
            "password_reset": string;
        };
    };
    "user": {
        "exception": {
            "invalid_name": string;
            "invalid_username": string;
            "invalid_password": string;
            "conflict_delete": string;
            "conflict_username": string;
            "forbidden_password": string;
        };
        "success": {
            "profile": string;
            "username": string;
            "password": string;
            "email_opt_in": string;
            "delete": string;
        };
    };
};
export type I18nPath = Path<I18nTranslations>;
