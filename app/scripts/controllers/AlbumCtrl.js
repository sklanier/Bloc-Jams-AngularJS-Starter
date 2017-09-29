(function() {
	 function AlbumCtrl(Fixtures) {
		 //refactored "Album View" code goes HERE
		 this.albumData = Fixtures.getAlbum();
	 }

	 angular
			 .module('blocJams')
			 .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();