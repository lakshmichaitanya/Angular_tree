app.directive('ngTree', function() {
		return {
			restrict: 'E',
			transclude: true,
			controller: function($scope) {
				$scope.showFolders = function(item){
				item.active = !item.active;
			};
			$scope.items = [
				{
					folder: "folder1",
					subfol: [
						{subfol: "subfolder1"},
						{subfol: "subfolder2"},
						{subfol: "subfolder3"},
						{subfol: "subfolder4"},
						{subfol: "subfolder5 "}
					]
				},
				{
				folder: "folder2",
				subfol: [
					{subfol: "subfolder1"},
					{subfol: "subfolder2"},
					{subfol: "subfolder3"},
					{subfol: "subfolder4"},
					{subfol: "subfolder5"}
			
				]
				}
			];
		},
		templateUrl:'../views/tree.html'
		}
});
