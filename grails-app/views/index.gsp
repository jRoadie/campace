<!DOCTYPE html>
<html>
<head>
    <title>campace :^: ace or pace your camp</title>

    <app:css path="lib/semantic-ui/semantic.css"/>

    <app:js path="lib/jquery/jquery.js"/>
    <app:js path="lib/angular/angular.js"/>
    <app:js path="lib/angular/angular-route.js"/>
    <app:js path="lib/semantic-ui/semantic.js"/>
    <app:js path="lib/semantic-ng-ui/semantic-ng-ui.js"/>
    <app:js path="js/app.js"/>

    <script type="text/javascript">
    var users = [{
        name: 'Hasan',
        email: 'hasan@campace.com',
        role: 'admin'
    }, {
        name: 'Russel',
        email: 'russel@campace.com',
        role: 'developer'
    }]
    </script>

    <script type="text/javascript">
        $(function() {
            $('.ui.sidebar')
                    .sidebar({
                        context: $('.bottom.segment')
                    })
                    .sidebar('attach events', '.menu .item')
            ;
        })
    </script>

</head>
<body ng-app="campace">
<div class="ui bottom attached segment">
    <div class="ui inverted labeled icon left inline vertical sidebar menu">
        <a class="item">
            <i class="home icon"></i>
            Home
        </a>
        <a class="item" href="#/campace/user?id=5346">
            <i class="calendar icon"></i>
            User
        </a>
        <a class="item">
            <i class="block layout icon"></i>
            Topics
        </a>
        <a class="item">
            <i class="smile icon"></i>
            Friends
        </a>
        <a class="item">
            <i class="calendar icon"></i>
            History
        </a>
    </div>
    <div class="pusher">
        <div class="ui top attached demo menu">
            <a class="item">
                <i class="sidebar icon"></i>
                Menu
            </a>
        </div>
        <div class="ui basic segment">
            <div ng-view></div>
        </div>
    </div>
</div>
</body>
</html>