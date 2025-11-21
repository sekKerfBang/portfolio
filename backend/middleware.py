from django.http import HttpResponse


class HealthCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.META.get('HTTP_USER_AGENT') in ['Go-http-client/1.1', 'Go-http-client/2.0', 'Render']:
            return HttpResponse("OK", status=200)
        return self.get_response(request)