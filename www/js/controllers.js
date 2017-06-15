angular.module('app.controllers', [])

  .controller('percorsoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('cercaPercorsoCtrl', ['$scope', '$stateParams','$state','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    function ($scope, $stateParams,$state,$ionicPopup) {
    console.log("dadsdf")

      //POI
        //DA SOSTITUIRE CON INFOPOIS
        $scope.infoPois = [
            {id: '1', nom_poi: 'Option A'},
            {id: '2', nom_poi: 'Option B'},
            {id: '3', nom_poi: 'Option C'}
          ];

      $scope.cercaPercorso = function () {

      }

      //PERCORSI
    //DA SOSTITUIRE CON LA LISTA DEI PERCORSI
      $scope.pathList = [
        {src: '1', namePOI:'paooaa' ,namePath:'path', description: 'Option A'},
        {src: '2', namePOI:'afsdfas',namePath:'path2' , description: 'Option A'}
      ];

      $scope.goToMyPersonalPath = function (path) {
        console.log("search")
      };

      $scope.deletePath = function (path) {
        console.log("del")
        console.log(path)
      };
      $scope.editPath = function (path) {
        console.log("edit")
      };



      //ADD POI DA SPOSTARE
      $scope.newPoi={
        coordinate:"cooo"
      }
      $scope.addPoi = function () {
        var alertPopup = $ionicPopup.show({
          scope: $scope,
          title: 'Aggiungi POI',
          subTitle: 'Inserisci le informazioni',
          templateUrl: 'templates/addPOI.html',
          buttons: [{
            text: 'Cancel',
            type: 'button-positive',
            onTap: function(e) {
return true;
            }
          }, {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
return false;
              var newPoi = $scope.newPoi;
console.log($scope.newPoi)
              if (newPoi.name && $scope.imgURI) {

                var description = newPoi.description;
                if (!description)
                  description = "";

                var objToSave = {
                  name: newPoi.name,
                  description: description,
                  coordinate:newPoi.coordinate
                };

                console.log(objToSave);
              }
             }
          }]
        });
      };


    }])


  .controller('homeCtrl', function($scope, $ionicModal) {
    //nome della pagina html che viene prodotta nel modal
      $ionicModal.fromTemplateUrl('templates/cercaPercorso.html', {
        scope: $scope,
        animation: 'slide-in-up',
      }).then(function(modal) {
        $scope.modal = modal;
      });

      //apertura del modal
      $scope.openModal = function() {
        $scope.modal.show();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });

      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });

      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      })
  })

  .controller('iMieiPercorsiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])


  .controller('addPOICtrl', ['$scope', '$stateParams','$cordovaCamera','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    function ($scope, $stateParams,$cordovaCamera,$ionicPopup) {

    console.log("addPoi")
      var newPoi = $scope.newPoi;
      console.log(newPoi)
    /*  $scope.savePOI = function (newPoi) {
        console.log("B")

        if ($scope.addPoiForm.$valid && $scope.imgURI) {

         var description = newPoi.description;
          if (!description)
            description = "";

          var objToSave = {
            name: newPoi.name,
            description: description,
            coordinate:newPoi.coordinate
          };

          console.log(objToSave);
        }
        else
          $ionicPopup.alert({
            title: 'Error',
            template: 'Input not valid'
          });
      };*/

      $scope.choosePhoto = function () {
        var imgRect = document.getElementById("addPoiId").getBoundingClientRect();
        console.log("rect= " + imgRect.width + " " + imgRect.height + " " + imgRect.bottom + " " + imgRect.left);
        var srcType = Camera.PictureSourceType.PHOTOLIBRARY;
        var options = setOptionsCamera(srcType, imgRect.width, imgRect.height);

        $cordovaCamera.getPicture(options).then(function (imageURI) {
          $scope.imgURI = "data:image/jpeg;base64," + imageURI;
        }, function (err) {
          console.log("error createSharedEventCtrl: " + err);
        });

      }
      $scope.takePhoto = function () {
        $cordovaCamera.getPicture(setOptionsCamera(Camera.PictureSourceType.CAMERA)).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
          console.log("error eventInfoCtrl " + err)
        });
      };

    }])
