package org.campace.context

import javax.servlet.http.HttpServletRequest

class AppContext {

    private static Boolean initialized = false
    private static String base_url
    private static String relative_url

    public static Boolean isInitialized() {
        return initialized
    }

    public static String getBaseUrl() {
        return base_url
    }

    public static String getRelativeUrl() {
        return relative_url
    }

    public static void init(HttpServletRequest request) {
        initialized = true
        base_url = request.scheme + "//" + request.serverName
        base_url = request.serverPort == 80 ? base_url : base_url + ":" + request.serverPort
        relative_url = request.contextPath
    }

}
