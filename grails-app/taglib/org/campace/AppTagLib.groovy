package org.campace

import org.campace.context.AppContext

class AppTagLib {

    static namespace = "app"

    def css = { attrs, body ->
        out << "<link type='text/css' rel='stylesheet' href='${AppContext.relativeUrl}/${attrs.path}'/>"
    }

    def js = { attrs, body ->
        out << "<script type='text/javascript' src='${AppContext.relativeUrl}/${attrs.path}'></script>"
    }
}
