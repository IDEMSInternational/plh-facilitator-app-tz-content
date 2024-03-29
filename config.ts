import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator_tz");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_ids: ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R", "1BbbC8afYsT6pDrBlqDu8q0TjgIQsnPlk"],
  assets_folder_ids: ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf", "1p12EIcM0zuA6s6Djvqxg1sdGint7TEWt"],
};

config.android = {
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-tz-content.git",
  content_tag_latest: "1.1.3",
};

config.api.db_name = "plh_facilitator_tz"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "FacilitatorApp TZ";
config.app_config.APP_HEADER_DEFAULTS.title = "FacilitatorApp TZ";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from FacilitatorApp TZ";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from FacilitatorApp TZ";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.error_logging = { dsn: "https://1459d77a855f4c82937638bcb0a1106e@app.glitchtip.com/5662"};

export default config;
