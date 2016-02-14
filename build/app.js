var JsonDummy;
(function (JsonDummy) {
    JsonDummy.app = angular.module("JsonDummy", ["ngMaterial"]);
    JsonDummy.app.config(["$mdThemingProvider", function ($mdThemingProvider) {
            $mdThemingProvider.theme("default").primaryPalette("blue-grey").accentPalette("yellow");
        }]);
})(JsonDummy || (JsonDummy = {}));

var JsonDummy;
(function (JsonDummy) {
    var JsonDummyController = (function () {
        function JsonDummyController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        JsonDummyController.prototype.availableMethods = function () {
            var result = {};
            var whitelist = [
                "address", "commerce", "company", "date", "finance", "hacker",
                "image", "internet", "lorem", "name", "phone", "random"
            ];
            _.each(faker, function (category, categoryName) {
                if (whitelist.indexOf(categoryName) !== -1) {
                    result[categoryName] = category;
                }
            });
            return JSON.stringify(result, null, 4);
        };
        JsonDummyController.$inject = ["$mdDialog"];
        return JsonDummyController;
    })();
    JsonDummy.JsonDummyController = JsonDummyController;
    JsonDummy.app.controller("JsonDummyController", JsonDummyController);
})(JsonDummy || (JsonDummy = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS50cyIsImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiSnNvbkR1bW15IiwiSnNvbkR1bW15Lkpzb25EdW1teUNvbnRyb2xsZXIiLCJKc29uRHVtbXkuSnNvbkR1bW15Q29udHJvbGxlci5jb25zdHJ1Y3RvciIsIkpzb25EdW1teS5Kc29uRHVtbXlDb250cm9sbGVyLmF2YWlsYWJsZU1ldGhvZHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sU0FBUyxDQUtmO0FBTEQsV0FBTyxTQUFTLEVBQUMsQ0FBQztJQUNIQSxhQUFHQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM3REEsYUFBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxVQUFDQSxrQkFBa0JBO1lBQ3ZEQSxrQkFBa0JBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQ3pGQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQSxFQUxNLFNBQVMsS0FBVCxTQUFTLFFBS2Y7O0FDSkQsSUFBTyxTQUFTLENBc0JmO0FBdEJELFdBQU8sU0FBUyxFQUFDLENBQUM7SUFDZEE7UUFFSUMsNkJBQW9CQSxTQUFTQTtZQUFUQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFBQTtRQUU3QkEsQ0FBQ0E7UUFFTUQsOENBQWdCQSxHQUF2QkE7WUFDTEUsSUFBSUEsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDaEJBLElBQUlBLFNBQVNBLEdBQUdBO2dCQUNmQSxTQUFTQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSxNQUFNQSxFQUFFQSxTQUFTQSxFQUFFQSxRQUFRQTtnQkFDN0RBLE9BQU9BLEVBQUVBLFVBQVVBLEVBQUVBLE9BQU9BLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLFFBQVFBO2FBQ3ZEQSxDQUFDQTtZQUNGQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFTQSxRQUFRQSxFQUFFQSxZQUFZQTtnQkFDNUMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7WUFDRixDQUFDLENBQUNBLENBQUNBO1lBQ0hBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQWpCWUYsMkJBQU9BLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBa0JuQ0EsMEJBQUNBO0lBQURBLENBbkJBRCxBQW1CQ0MsSUFBQUQ7SUFuQllBLDZCQUFtQkEsc0JBbUIvQkEsQ0FBQUE7SUFDREEsYUFBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EscUJBQXFCQSxFQUFFQSxtQkFBbUJBLENBQUNBLENBQUNBO0FBQy9EQSxDQUFDQSxFQXRCTSxTQUFTLEtBQVQsU0FBUyxRQXNCZiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgSnNvbkR1bW15IHtcclxuICAgIGV4cG9ydCBsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJKc29uRHVtbXlcIiwgW1wibmdNYXRlcmlhbFwiXSk7XHJcbiAgICBhcHAuY29uZmlnKFtcIiRtZFRoZW1pbmdQcm92aWRlclwiLCAoJG1kVGhlbWluZ1Byb3ZpZGVyKSA9PiB7XHJcblx0XHQkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoXCJkZWZhdWx0XCIpLnByaW1hcnlQYWxldHRlKFwiYmx1ZS1ncmV5XCIpLmFjY2VudFBhbGV0dGUoXCJ5ZWxsb3dcIik7XHJcblx0fV0pO1xyXG59IiwiZGVjbGFyZSB2YXIgZmFrZXI6IEZha2VyLkZha2VyU3RhdGljO1xyXG5tb2R1bGUgSnNvbkR1bW15IHtcclxuICAgIGV4cG9ydCBjbGFzcyBKc29uRHVtbXlDb250cm9sbGVyIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRtZERpYWxvZ1wiXTtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRtZERpYWxvZyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgYXZhaWxhYmxlTWV0aG9kcygpIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IHt9O1xyXG5cdFx0XHR2YXIgd2hpdGVsaXN0ID0gW1xyXG5cdFx0XHRcdFwiYWRkcmVzc1wiLCBcImNvbW1lcmNlXCIsIFwiY29tcGFueVwiLCBcImRhdGVcIiwgXCJmaW5hbmNlXCIsIFwiaGFja2VyXCIsXHJcblx0XHRcdFx0XCJpbWFnZVwiLCBcImludGVybmV0XCIsIFwibG9yZW1cIiwgXCJuYW1lXCIsIFwicGhvbmVcIiwgXCJyYW5kb21cIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRfLmVhY2goZmFrZXIsIGZ1bmN0aW9uKGNhdGVnb3J5LCBjYXRlZ29yeU5hbWUpe1xyXG5cdFx0XHRcdGlmKHdoaXRlbGlzdC5pbmRleE9mKGNhdGVnb3J5TmFtZSkgIT09IC0xKXtcclxuXHRcdFx0XHRcdHJlc3VsdFtjYXRlZ29yeU5hbWVdID0gY2F0ZWdvcnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgNCk7XHJcblx0XHR9XHJcbiAgICB9XHJcbiAgICBhcHAuY29udHJvbGxlcihcIkpzb25EdW1teUNvbnRyb2xsZXJcIiwgSnNvbkR1bW15Q29udHJvbGxlcik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9