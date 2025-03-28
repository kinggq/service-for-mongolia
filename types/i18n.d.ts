import { DefineLocaleMessage } from 'vue-i18n'

declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    nav: {
      home: string
      car: string
      shopping: string
      tourism: string
      export: string
      wholesale: string
      about: string
      contact: string
    }
    hero: {
      title: string
      subtitle: string
    }
    services: {
      car: {
        title: string
        description: string
        erlian: {
          title: string
          description: string
        }
        hohhot: {
          title: string
          description: string
        }
        beijing: {
          title: string
          description: string
        }
      }
      shopping: {
        title: string
        description: string
        carpet: {
          title: string
          description: string
        }
        flooring: {
          title: string
          description: string
        }
        other: {
          title: string
          description: string
        }
      }
      tourism: {
        title: string
        description: string
        beijing: {
          title: string
          description: string
        }
        innerMongolia: {
          title: string
          description: string
        }
        custom: {
          title: string
          description: string
        }
      }
      export: {
        title: string
        description: string
        export: {
          title: string
          description: string
        }
        import: {
          title: string
          description: string
        }
        logistics: {
          title: string
          description: string
        }
      }
      wholesale: {
        title: string
        description: string
        building: {
          title: string
          description: string
        }
        home: {
          title: string
          description: string
        }
        clothing: {
          title: string
          description: string
        }
      }
    }
    contact: {
      title: string
      subtitle: string
      email: string
      phone: string
      address: string
      social: string
    }
    about: {
      subtitle: string
      intro: {
        title: string
        content: string
      }
      advantages: {
        title: string
        team: {
          title: string
          content: string
        }
        service: {
          title: string
          content: string
        }
        price: {
          title: string
          content: string
        }
      }
    }
  }
} 
