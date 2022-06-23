/**
 * Project Core Base Module
 */
export const CORE_BASE_MODULE: [string, string] = ['cmf-core', 'CoreModule'];

/**
 * Project MES Base Module
 */
export const MES_BASE_MODULE: [string, string] = ['cmf-mes', 'MESModule'];

/**
 * Project Core Packages
 */
export const PACKAGES: string[] = [
    "cmf-core",
    "cmf-core-admin-config",
    "cmf-core-admin-dee",
    "cmf-core-admin-entitytype",
    "cmf-core-admin-host",
    "cmf-core-admin-i18n",
    "cmf-core-admin-queries",
    "cmf-core-app",
    "cmf-core-business-controls",
    "cmf-core-camera",
    "cmf-core-checklist",
    "cmf-core-controls",
    "cmf-core-dashboards",
    "cmf-core-enterprise",
    "cmf-core-folder",
    "cmf-core-masterdata",
    "cmf-core-multimedia",
    "cmf-core-rule",
    "cmf-core-search",
    "cmf-core-security",
    "cmf-core-shell",
    "cmf-core-site"
];

/**
 * Current Version
 */
export const VERSION: string = 'dex-10x-next';

/**
 * Project Assets
 */
export const PROJECT_ASSETS = [
    {
        'glob': 'favicon.ico',
        'input': 'node_modules/cmf-core/src/assets/img',
        'output': ''
    },
    {
        'glob': '**/icon-*.png',
        'input': 'node_modules/cmf-core/src/assets/img/icons',
        'output': 'assets/icons'
    },
    {
        'glob': '**/*',
        'input': 'node_modules/cmf-core/src/assets/img/flags',
        'output': 'assets/flags'
    },
    {
        'glob': '**/*',
        'input': 'node_modules/cmf-core/src/assets/img/themes',
        'output': 'assets/themes'
    },
    {
        'glob': '**/*',
        'input': 'node_modules/monaco-editor/min/vs',
        'output': 'monaco-editor/vs'
    }
];

/**
 * THEMES
 */
export const THEMES = ['cmf.style.gray', 'cmf.style.dark', 'cmf.style.blue'];

/**
 * Project Styles
 */
export const PROJECT_STYLES = [
    'node_modules/toastr/toastr.less',
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/cmf.kendoui/styles/kendo.common.min.css',
    'node_modules/jquery-ui/themes/base/dialog.css',
    'node_modules/jquery-ui/themes/base/core.css',
    'node_modules/cmf-core/src/assets/style/styles.less',
    ...THEMES.map(theme => ({
        'inject': false,
        'bundleName': theme,
        'input': `node_modules/cmf-core/src/assets/style/themes/${theme}/${theme}.less`
    }))
];

/**
 * Project Scripts
 */
export const PROJECT_SCRIPTS = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/lodash/lodash.js',
    'node_modules/graphlib/dist/graphlib.core.js',
    'node_modules/dagre/dist/dagre.core.js',
    'node_modules/toastr/toastr.js',
    'node_modules/jquery-ui/ui/version.js',
    'node_modules/jquery-ui/ui/data.js',
    'node_modules/jquery-ui/ui/safe-active-element.js',
    'node_modules/jquery-ui/ui/unique-id.js',
    'node_modules/jquery-ui/ui/focusable.js',
    'node_modules/jquery-ui/ui/tabbable.js',
    'node_modules/jquery-ui/ui/keycode.js',
    'node_modules/jquery-ui/ui/safe-blur.js',
    'node_modules/jquery-ui/ui/widget.js',
    'node_modules/jquery-ui/ui/widgets/button.js',
    'node_modules/jquery-ui/ui/widgets/dialog.js',
    'node_modules/bootstrap/js/collapse.js',
    'node_modules/bootstrap/js/transition.js',
    'node_modules/bootstrap/js/dropdown.js',
    'node_modules/cmf.kendoui/js/kendo.core.min.js',
    'node_modules/cmf.kendoui/js/kendo.fx.min.js',
    'node_modules/cmf.kendoui/js/kendo.ooxml.min.js',
    'node_modules/cmf.kendoui/js/kendo.excel.min.js',
    'node_modules/cmf.kendoui/js/kendo.data.odata.min.js',
    'node_modules/cmf.kendoui/js/kendo.data.xml.min.js',
    'node_modules/cmf.kendoui/js/kendo.data.min.js',
    'node_modules/cmf.kendoui/js/kendo.popup.min.js',
    'node_modules/cmf.kendoui/js/kendo.menu.min.js',
    'node_modules/cmf.kendoui/js/kendo.userevents.min.js',
    'node_modules/cmf.kendoui/js/kendo.draganddrop.min.js',
    'node_modules/cmf.kendoui/js/kendo.floatinglabel.min.js',
    'node_modules/cmf.kendoui/js/kendo.maskedtextbox.min.js',
    'node_modules/cmf.kendoui/js/kendo.list.min.js',
    'node_modules/cmf.kendoui/js/kendo.mobile.scroller.min.js',
    'node_modules/cmf.kendoui/js/kendo.virtuallist.min.js',
    'node_modules/cmf.kendoui/js/kendo.dropdownlist.min.js',
    'node_modules/cmf.kendoui/js/kendo.combobox.min.js',
    'node_modules/cmf.kendoui/js/kendo.autocomplete.min.js',
    'node_modules/cmf.kendoui/js/kendo.window.min.js',
    'node_modules/cmf.kendoui/js/kendo.color.min.js',
    'node_modules/cmf.kendoui/js/kendo.slider.min.js',
    'node_modules/cmf.kendoui/js/kendo.button.min.js',
    'node_modules/cmf.kendoui/js/kendo.colorpicker.min.js',
    'node_modules/cmf.kendoui/js/kendo.editor.min.js',
    'node_modules/cmf.kendoui/js/kendo.columnsorter.min.js',
    'node_modules/cmf.kendoui/js/kendo.resizable.min.js',
    'node_modules/cmf.kendoui/js/kendo.selectable.min.js',
    'node_modules/cmf.kendoui/js/kendo.pager.min.js',
    'node_modules/cmf.kendoui/js/kendo.grid.min.js',
    'node_modules/cmf.kendoui/js/kendo.splitter.min.js',
    'node_modules/cmf.kendoui/js/kendo.tooltip.min.js',
    {
        'bundleName': 'jszip',
        'inject': false,
        'input': 'node_modules/cmf.kendoui/js/jszip.min.js'
    },
    {
        'bundleName': 'fullcalendar',
        'inject': false,
        'input': 'node_modules/fullcalendar/dist/fullcalendar.min.js'
    }
];
