import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy {
//intregation de route
  private route = inject(ActivatedRoute);
  monsterId = signal<number | undefined>(undefined);

  //integration de routeur
  private router = inject(Router);
  
  //integration de Subscribe
  routeSubscription: Subscription | null = null;


  // ngOnInit(): void {
  //   const params = this.route.snapshot.params;
  //   this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
  // }

  //il faut utilser un systeme d'abonnement pour avoir les bonnes info au fil du temp
  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
    })
  }
  
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  next(): void {
    let nextId = this.monsterId() || 0;
    nextId++;
    this.router.navigate(['/monster/' + nextId]);

  }

}
