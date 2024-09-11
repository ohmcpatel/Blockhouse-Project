from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase

class ChartAPITest(TestCase):
    
    def test_get_line_chart_data(self):
        response = self.client.get(reverse('line-chart-data'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('data', response.json())
        self.assertIn('labels', response.json())

    def test_get_bar_chart_data(self):
        response = self.client.get(reverse('bar-chart-data'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('data', response.json())
        self.assertIn('labels', response.json())

    def test_get_pie_chart_data(self):
        response = self.client.get(reverse('pie-chart-data'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('data', response.json())
        self.assertIn('labels', response.json())


class ChartAPITest(APITestCase):
    
    def test_get_candlestick_data(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), dict)
