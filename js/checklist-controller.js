var app = angular.module('checklistApp', ['LocalStorageModule'])
  .controller('ChecklistController', ['localStorageService', function(localStorageService){

    this.defaults = {
      'bed': {
        'warm blankets': false,
        'portable blanket': false,
        'matress pad': false,
        'sproingy sheet': false,
        'comforter': false,
        'pillows': false,
        'pillow cases': false
      },
      'room': {
        'cool posters': false,
        'clothes hangers': false,
        'stickable hooks': false,
        'cool chair': false,
        'shuriken curtains (consult roommate)': false,
        'door stop': false,
        'trashcan': false,
        'box fan?': false,
        'bedside bunk sack': false,
        'desk lamp': false
      },
      'school supplies': {
        'stapler': false,
        'pencils': false,
        'pens': false,
        'staples': false,
        'notebooks': false,
        'scissors': false,
        'tape': false,
        'copies of resume': false,
        'ruler': false,
        'calculator': false,
        'glue': false,
        'highlighters': false,
        'rubber bands': false,
        'chompy clips': false,
        'paper clips': false,
        'duct tape': false,
        'pencil sharpener': false,
        'pencil case': false,
        'flash drives': false,
        'folders': false,
        'business cards': false,
        'erasers': false,
        'desk organizer': false
      },
      'clothes': {
        'underwear': false,
        'bras': false,
        'socks': false,
        'shorts': false,
        'pants': false,
        't-shirts': false,
        'formal outfit': false,
        'semi-formal outfit': false,
        'winter coat': false,
        'winter hat': false,
        'light sweatshirt': false,
        'heavy sweatshirt': false,
        'winter boots': false,
        'sandles': false,
        'sneakers': false,
        'dress shoes': false,
        'sun hat': false,
        'snow pants': false,
        'long underwear': false,
        'winter gloves': false,
        'light gloves': false,
        'scarf': false,
        'tae kwon do outfit': false,
        'workout clothes': false,
        'glasses string': false,
        'jewelry for (semi-)formal outfits': false,
        'belts': false,
        'rain jacket': false,
        'pajamas': false,
        'umbrella': false,
        'swimsuit': false
      },
      'bathroom': {
        'stain remover': false,
        'shower shoes': false,
        'soap scrunchy': false,
        'frog pincusion': false,
        'toiletry bucket': false,
        'acne creame': false,
        'bandaids': false,
        'itch creame': false,
        'hand lotion': false,
        'nail clippers': false,
        'toothbrush': false,
        'glasses cloth and spray': false,
        'towels': false,
        'waterbottle': false,
        'deoderant': false,
        'shampoo': false,
        'conditioner': false,
        'toothpaste': false,
        'comb': false,
        'sunscreen': false,
        'kleenex': false,
        'coughdrops': false,
        'floss': false,
        'lint brush': false,
        'old glasses': false,
        'laundry bag': false,
        'highlighters': false,
        'glue': false,
        'index cards': false
      },
      'misc': {
        'bike lock': false,
        'bike helmet': false,
        'bike': false,
        'gym bag': false,
        'ethernet cable': false,
        'router muahahaha': false,
        'second monitor': false,
        'charging cables': false,
        'projector': false,
        'speaker': false,
        'batteries': false,
        'screen cleaning fluid and cloth': false,
        'watches': false,
        'cell phone': false,
        '2 nintendo DS and games': false,
        'laptop': false,
        'mouse': false,
        'mouse pad': false,
        'ipod': false,
        'extension cord': false,
        'pleasurable books': false,
        'tools': false,
        'playing cards': false,
        'board games': false,
        'cards against humanity': false,
        'flashlight': false,
        'backup HDD': false,
        'luggage tags': false,
        'headphones': false,
        'DVDs': false,
        'backpack': false,
        'assorted bags': false,
        'stress balls': false,
        'stuffed animals/water pump/desk decorations': false,
        'photos': false,
        'power strips': false,
        'wallet + change': false,
        'SSN card, bank card': false
      }
    }

    this.init = function(){

      var oldList = localStorageService.get('collegeList')
      this.list = oldList ? oldList : this.defaults

    }

    this.check = function(section, item){
      this.list[section][item] = !this.list[section][item]
      localStorageService.add('collegeList', JSON.stringify(this.list))
    }

    this.reset = function(){
      localStorageService.remove('collegeList')
      this.init()
    }

    this.init()

  }])
