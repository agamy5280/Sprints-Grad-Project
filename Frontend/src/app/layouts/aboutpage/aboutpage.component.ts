import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent {

     public  servicesList =[
      {
        icon:"fas fa-exchange-alt",
        delay:"0.1s",
        title:"Fast Transfer",
        description: "Our Money transfer system is secure and easy. Send your funds to your beneficiaries within MoneyWall or to other banks. Transfer within MoneyWall is instant and to other banks may take 24 hours."
      },

      {
        icon:"fas fa-credit-card",
        delay:"0.3s",
        title:"Deposit Funds",
        description: "Account-holders of MoneyWall are able to deposit their money through our several payment systems. We have online payment services like PayPal, Stripe, Paystack, Skrill, Flutterwave, Mollie, Payeer, etc."
      },

      {
        icon:"fas fa-money-check-alt",
        delay:"0.5s",
        title:"Withdraw Funds",
        description:"Account-holders of MoneyWall are able to withdraw money from their account. Without verification, any withdrawal won't be completed, so you can trust MoneyWall.MoneyWall is a complete e-Banking system."
      },

     ];



     public aboutList=[
      {
        icon:"fas fa-hourglass-start",
        delay:"0.1s",
        title:"Our Mission",
        description: "We are focused on building and sustaining long-term generational relationships with our customers"
      },

      {
        icon:"far fa-eye",
        delay:"0.3s",
        title:"Our Vision",
        description: "MoneyWall will serve all over the world and becomes the most popular Bank in this universe."
      },

      {
        icon:"fas fa-bullseye",
        delay:"0.5s",
        title:"Our Goal",
        description:"MoneyWall will serve their customers from all over the world and becomes the popular bank in this universe."
      },

     ]
     public transactList =[
      {
        icon:"las la-user-circle",
        delay:"0.1s",
        title:"Fast Transfer",
        count: "24M"
      },

      {
        icon:"las la-coins",
        delay:"0.3s",
        title:"Total Transaction",
        count: "3B"
      },

      {
        icon:"las la-project-diagram",
        delay:"0.5s",
        title:"Total Branches",
        count: "120"
      },

      {
        icon:"las la-globe-africa",
        delay:"0.7s",
        title:"Countries We Serve",
        count: "240+"
      },
     ];
     public reviewsList =[
      {   
        name:"Michel Johnson",
        img:"assets/img/img-1.jpg",
        title:"Founder of ZZ",
        description:"I had opened an account 5 years ago, I feel safe keeping my funds in MoneyWall. Their Deposit schemes plans are really helpful.",
        review: 3.5,
      },

      {
        name:"John Smith",
        img:"assets/img/img-5.jpg",
        title:"CEO of CY",
        description:"Best quality service ever I had. The money transfer system is just awesome. The beneficiary listing system makes it quite efficient.",
        review: 5,
      },
      
      {
        name:"Adam Gilly",
        img:"assets/img/img-3.jpg",
        title:"CTO, UYT",
        description:"I had opened an account 3 years ago, I feel safe keeping my funds in MoneyWall. Their Deposit schemes plans are really helpful.",
        review: 3.5,
      },
      
      {
        name:"Maria Ahsan",
        img:"assets/img/img-4.jpg",
        title:"Managing Director, YY",
        description:"The is just awesome,  best quality service ever I had. You can trust them and deposit your funds. Their Loan plans are really helpful.",
        review: 3.5,
      },

      
      {   
        name:"Michel Johnson",
        img:"assets/img/img-1.jpg",
        title:"Founder of ZZ",
        description:"I had opened an account 5 years ago, I feel safe keeping my funds in MoneyWall. Their Deposit schemes plans are really helpful.",
        review: 3.5,
      },

      {
        name:"John Smith",
        img:"assets/img/img-5.jpg",
        title:"CEO of CY",
        description:"Best quality service ever I had. The money transfer system is just awesome. The beneficiary listing system makes it quite efficient.",
        review: 5,
      },
      
      {
        name:"Adam Gilly",
        img:"assets/img/img-3.jpg",
        title:"CTO, UYT",
        description:"I had opened an account 3 years ago, I feel safe keeping my funds in MoneyWall. Their Deposit schemes plans are really helpful.",
        review: 3.5,
      },
      
      {
        name:"Maria Ahsan",
        img:"assets/img/img-4.jpg",
        title:"Managing Director, YY",
        description:"The is just awesome,  best quality service ever I had. You can trust them and deposit your funds. Their Loan plans are really helpful.",
        review: 3.5,
      },
    ]
}

