package org.campace.filter

import org.campace.context.AppContext

class InboundFilters {

    def filters = {
        all(controller: '*', action: '*') {
            before = {
                if(!AppContext.isInitialized()) {
                    AppContext.init(request)
                }
            }
            after = { Map model ->
            }
            afterView = { Exception e ->
            }
        }
    }
}

